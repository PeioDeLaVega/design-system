import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement, Children, useState, useRef, useEffect, isValidElement, } from "react";
import { getComponentClassName } from "./getComponentClassName";
import { MessageTypes } from "./MessageTypes";
import { FormClassManager } from "./FormClassManager";
const defaultClassName = "md-10";
const INITIAL_STATE = {
    hasLostFocusOnce: false,
    hasFocus: false,
    hasChange: false,
    memory: { message: "", messageType: MessageTypes.error },
};
export const setStateMemory = ({ message = null, messageType = MessageTypes.error }) => (prevState) => ({
    ...prevState,
    memory: {
        message,
        messageType,
    },
});
export const setStateHasChange = () => (prevState) => ({
    ...prevState,
    hasChange: true,
});
export const onChangeByState = (setState, stateHasChange, setStateHasChangeFn = setStateHasChange) => !stateHasChange && setState(setStateHasChangeFn());
export const setStateOnBlur = () => (prevState) => ({
    ...prevState,
    hasLostFocusOnce: true,
    hasFocus: false,
});
export const setStateOnFocus = ({ message = null, messageType = MessageTypes.error }) => (prevState) => ({
    ...prevState,
    hasFocus: true,
    memory: { message, messageType },
});
export const getMessageInfo = ({ forceDisplayMessage, hasLostFocusOnce, hasFocus, memory, hasChange, message, messageType, }) => {
    const isDisplayMessage = hasLostFocusOnce || forceDisplayMessage || (hasChange && !hasFocus);
    if (!isDisplayMessage) {
        return {
            message: "",
            messageType: "",
        };
    }
    return hasFocus
        ? memory
        : {
            message,
            messageType,
        };
};
export const eventWrapper = ({ wrapper, props }) => ({
    onChange: (ev) => {
        wrapper?.onChange?.(ev);
        if (props.onChange) {
            props.onChange(ev);
        }
    },
    onBlur: (ev) => {
        wrapper?.onBlur?.(ev);
        if (props.onBlur) {
            props.onBlur(ev);
        }
    },
    onFocus: (ev) => {
        wrapper?.onFocus?.(ev);
        if (props.onFocus) {
            props.onFocus(ev);
        }
    },
});
export const addPropsClone = ({ message, messageType, classModifier, wrapper, child, name, getMessageClassModifierFn = FormClassManager.getMessageClassModifier, eventWrapperFn = eventWrapper, ...rest }) => {
    const messageClassModifier = getMessageClassModifierFn(messageType, message, classModifier);
    const type = { ...rest };
    const displayName = type?.displayName ?? name;
    switch (displayName) {
        case "HelpMessage":
            return { isVisible: !message };
        case "FieldError":
            return { message };
        case "FieldInput":
            return { classModifier: messageClassModifier };
        case "EnhancedInputRadio":
        case "EnhancedInputCheckbox":
            return {
                ...eventWrapperFn({ wrapper, props: child.props }),
                classModifier: messageClassModifier,
            };
        case "EnhancedInput":
            return {
                ...eventWrapperFn({ wrapper, props: child.props }),
            };
        default:
            return {};
    }
};
export const renderedChildren = ({ children, wrapper, message, messageType, }) => Children.map(children, (child) => {
    if (!isValidElement(child) || typeof child.type === "string") {
        return child;
    }
    const props = {
        ...child.props,
    };
    if (child.props.children) {
        const subChildren = renderedChildren({
            children: child.props
                .children,
            wrapper,
            message,
            messageType,
        });
        if (subChildren !== null) {
            props.children = subChildren;
        }
    }
    return cloneElement(child, {
        ...props,
        ...addPropsClone({
            ...child.type,
            name: child.type.name,
            message,
            messageType,
            classModifier: props.classModifier,
            wrapper,
            child: child,
        }),
    });
});
export const FieldForm = ({ children, message = null, messageType = MessageTypes.error, className = defaultClassName, classModifier = "", forceDisplayMessage = false, setStateMemoryFn = setStateMemory, onChangeByStateFn = onChangeByState, setStateOnBlurFn = setStateOnBlur, setStateOnFocusFn = setStateOnFocus, initialState = INITIAL_STATE, }) => {
    const [state, setState] = useState(initialState);
    const previousForceDisplayMessage = useRef(forceDisplayMessage);
    useEffect(() => {
        if (previousForceDisplayMessage.current !== forceDisplayMessage) {
            setState(setStateMemoryFn({ message, messageType }));
        }
    }, [
        forceDisplayMessage,
        message,
        messageType,
        previousForceDisplayMessage,
        setState,
        setStateMemoryFn,
    ]);
    const onChange = () => onChangeByStateFn(setState, state?.hasChange);
    const onBlur = () => setState(setStateOnBlurFn());
    const onFocus = () => setState(setStateOnFocusFn({ message, messageType }));
    const childrenCloned = renderedChildren({
        children,
        wrapper: { onFocus, onChange, onBlur },
        ...getMessageInfo({ ...state, forceDisplayMessage, message, messageType }),
    });
    const subComponentClassName = getComponentClassName(className, classModifier, defaultClassName);
    return _jsx("div", { className: subComponentClassName, children: childrenCloned });
};

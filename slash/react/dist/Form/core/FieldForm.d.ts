import { type BaseSyntheticEvent, type Dispatch, type ReactElement, type ReactNode, type SetStateAction } from "react";
import { FormClassManager } from "./FormClassManager";
import { MessageTypes } from "./MessageTypes";
type TMessage = {
    message?: string;
    messageType?: MessageTypes;
};
declare const INITIAL_STATE: {
    hasLostFocusOnce: boolean;
    hasFocus: boolean;
    hasChange: boolean;
    memory: TMessage;
};
type EventFunction = {
    onChange?: (event: BaseSyntheticEvent) => void;
    onBlur?: (event: BaseSyntheticEvent) => void;
    onFocus?: (event: BaseSyntheticEvent) => void;
};
type FieldFormProps = TMessage & {
    className?: string;
    classModifier?: string;
    forceDisplayMessage?: boolean;
    children: ReactNode;
    setStateMemoryFn?: typeof setStateMemory;
    onChangeByStateFn?: typeof onChangeByState;
    setStateOnBlurFn?: typeof setStateOnBlur;
    setStateOnFocusFn?: typeof setStateOnFocus;
    initialState?: typeof INITIAL_STATE;
};
type SetState = (prevState: typeof INITIAL_STATE) => typeof INITIAL_STATE;
export declare const setStateMemory: ({ message, messageType }: TMessage) => SetState;
export declare const setStateHasChange: () => SetState;
export declare const onChangeByState: (setState: Dispatch<SetStateAction<{
    hasLostFocusOnce: boolean;
    hasFocus: boolean;
    hasChange: boolean;
    memory: TMessage;
}>>, stateHasChange: boolean, setStateHasChangeFn?: () => SetState) => false | void;
export declare const setStateOnBlur: () => SetState;
export declare const setStateOnFocus: ({ message, messageType }: TMessage) => SetState;
type GetMessageInfoProps = typeof INITIAL_STATE & Required<Pick<FieldFormProps, "message" | "messageType" | "forceDisplayMessage">>;
export declare const getMessageInfo: ({ forceDisplayMessage, hasLostFocusOnce, hasFocus, memory, hasChange, message, messageType, }: GetMessageInfoProps) => Pick<FieldFormProps, "message" | "messageType">;
type EventWrapperProps = {
    props: EventFunction;
} & Pick<AddPropsClone, "wrapper">;
export declare const eventWrapper: ({ wrapper, props }: EventWrapperProps) => {
    onChange: (ev: BaseSyntheticEvent) => void;
    onBlur: (ev: BaseSyntheticEvent) => void;
    onFocus: (ev: BaseSyntheticEvent) => void;
};
type AddPropsClone = Omit<RenderChildrenProps, "children"> & {
    child: ReactElement<Record<string, unknown>>;
    classModifier: string;
    name: string;
    getMessageClassModifierFn?: typeof FormClassManager.getMessageClassModifier;
    eventWrapperFn?: ({ wrapper, props }: EventWrapperProps) => {
        onChange: (ev: BaseSyntheticEvent) => void;
        onBlur: (ev: BaseSyntheticEvent) => void;
        onFocus: (ev: BaseSyntheticEvent) => void;
    };
};
export declare const addPropsClone: ({ message, messageType, classModifier, wrapper, child, name, getMessageClassModifierFn, eventWrapperFn, }: AddPropsClone) => {
    isVisible: boolean;
    message?: undefined;
    classModifier?: undefined;
} | {
    message: string | undefined;
    isVisible?: undefined;
    classModifier?: undefined;
} | {
    classModifier: string;
    isVisible?: undefined;
    message?: undefined;
} | {
    classModifier: string;
    onChange: (ev: BaseSyntheticEvent) => void;
    onBlur: (ev: BaseSyntheticEvent) => void;
    onFocus: (ev: BaseSyntheticEvent) => void;
    isVisible?: undefined;
    message?: undefined;
} | {
    onChange: (ev: BaseSyntheticEvent) => void;
    onBlur: (ev: BaseSyntheticEvent) => void;
    onFocus: (ev: BaseSyntheticEvent) => void;
    isVisible?: undefined;
    message?: undefined;
    classModifier?: undefined;
} | {
    isVisible?: undefined;
    message?: undefined;
    classModifier?: undefined;
};
type RenderChildrenProps = {
    wrapper: EventFunction;
} & Partial<Pick<FieldFormProps, "children">> & ReturnType<typeof getMessageInfo>;
export declare const renderedChildren: ({ children, wrapper, message, messageType, }: RenderChildrenProps) => ReactNode;
export declare const FieldForm: ({ children, message, messageType, className, classModifier, forceDisplayMessage, setStateMemoryFn, onChangeByStateFn, setStateOnBlurFn, setStateOnFocusFn, initialState, }: FieldFormProps) => import("react/jsx-runtime").JSX.Element;
export {};

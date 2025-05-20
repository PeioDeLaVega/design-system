import { ReactNode } from "react";
declare const DateInput: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "value"> & {
    classModifier?: string;
    defaultValue?: Date | string;
    value?: Date | string;
}, "ref"> & import("react").RefAttributes<HTMLInputElement>, "ref">, "placeholderText"> & Omit<{
    message?: string;
    messageType?: import("../core").MessageTypes;
} & {
    className?: string;
    classModifier?: string;
    forceDisplayMessage?: boolean;
    children: ReactNode;
    setStateMemoryFn?: typeof import("../core/FieldForm").setStateMemory;
    onChangeByStateFn?: typeof import("../core/FieldForm").onChangeByState;
    setStateOnBlurFn?: typeof import("../core/FieldForm").setStateOnBlur;
    setStateOnFocusFn?: typeof import("../core/FieldForm").setStateOnFocus;
    initialState?: {
        hasLostFocusOnce: boolean;
        hasFocus: boolean;
        hasChange: boolean;
        memory: {
            message?: string;
            messageType?: import("../core").MessageTypes;
        };
    };
}, "children"> & {
    label: ReactNode;
    children?: ReactNode;
    id?: string;
    classModifier?: string;
    classNameContainerLabel?: string;
    classNameContainerInput?: string;
    isVisible?: boolean;
    roleContainer?: string;
    ariaLabelContainer?: string;
    isLabelContainerLinkedToInput?: boolean;
    errorId?: string;
} & {
    placeholder?: string;
    helpMessage?: ReactNode;
    children?: ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export { DateInput };

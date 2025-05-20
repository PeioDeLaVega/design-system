import { RadioModes } from "./Radio";
declare const RadioInput: import("react").ForwardRefExoticComponent<Omit<{
    message?: string;
    messageType?: import("../core").MessageTypes;
} & {
    className?: string;
    classModifier?: string;
    forceDisplayMessage?: boolean;
    children: import("react").ReactNode;
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
    label: import("react").ReactNode;
    children?: import("react").ReactNode;
    id?: string;
    classModifier?: string;
    classNameContainerLabel?: string;
    classNameContainerInput?: string;
    isVisible?: boolean;
    roleContainer?: string;
    ariaLabelContainer?: string;
    isLabelContainerLinkedToInput?: boolean;
    errorId?: string;
} & Omit<Omit<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type" | "checked"> & {
    classModifier?: string;
    optionClassName?: string;
    label?: import("react").ReactNode;
    isChecked?: boolean;
}, "ref"> & import("react").RefAttributes<HTMLInputElement>, "label" | "className" | "id"> & {
    options: import("../core").Option[];
    mode?: keyof typeof RadioModes;
}, "ref"> & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { RadioInput };

import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { LegacyField, useInputClassModifier, useOptionsWithId } from "../core";
import { Choice } from "./Choice";
import { useAriaInvalid } from "../core/useAriaInvalid";
const defaultOptions = [
    { label: "Oui", value: true, id: "radioItemTrue" },
    { label: "Non", value: false, id: "radioItemFalse" },
];
const ChoiceInput = forwardRef(({ id, messageType, message, className, classModifier, isVisible, classNameContainerLabel, classNameContainerInput, label, forceDisplayMessage, options = defaultOptions, disabled, required, ...otherProps }, inputRef) => {
    const errorUseId = useId();
    const newOptions = useOptionsWithId(options.map((o) => ({ ...o, value: `${o.value}` })), id);
    const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(classModifier ?? "", disabled ?? false, false, required);
    const firstId = newOptions?.[0]?.id ?? "";
    const choiceOptions = newOptions.map((o) => ({
        ...o,
        value: o.value === "true",
    }));
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsx(LegacyField, { label: label, id: firstId, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: inputFieldClassModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, errorId: errorUseId, children: _jsx(Choice, { ...otherProps, id: id, ref: inputRef, classModifier: inputClassModifier, options: options ? choiceOptions : undefined, required: required, disabled: disabled, "aria-describedby": errorUseId, "aria-invalid": isInvalid }) }));
});
ChoiceInput.displayName = "ChoiceInput";
export { ChoiceInput };

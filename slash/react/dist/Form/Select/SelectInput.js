import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, } from "react";
import { FieldInput, HelpMessage, LegacyField, useInputClassModifier, } from "../core";
import { Select } from "./Select";
import { useAriaInvalid } from "../core/useAriaInvalid";
const SelectInput = forwardRef(({ classModifier = "", message, children, helpMessage, id, disabled = false, label, classNameContainerLabel, classNameContainerInput, messageType, isVisible, forceDisplayMessage, className, required, ...otherSelectProps }, inputRef) => {
    const generatedId = useId();
    const errorUseId = useId();
    const inputId = id ?? generatedId;
    const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(classModifier, disabled, Boolean(children), required);
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsxs(LegacyField, { label: label, id: inputId, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: inputFieldClassModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, errorId: errorUseId, children: [_jsxs(FieldInput, { className: "af-form__select", classModifier: inputFieldClassModifier, children: [_jsx(Select, { id: inputId, disabled: disabled, classModifier: inputClassModifier, ref: inputRef, required: required, "aria-describedby": errorUseId, "aria-invalid": isInvalid, ...otherSelectProps }), children] }), _jsx(HelpMessage, { message: helpMessage, isVisible: !message })] }));
});
SelectInput.displayName = "SelectInput";
export { SelectInput };

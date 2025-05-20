import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { FieldInput, HelpMessage, LegacyField, useInputClassModifier, } from "../core";
import { Date } from "./Date";
import { useAriaInvalid } from "../core/useAriaInvalid";
const DateInput = forwardRef(({ classModifier = "", message, children, helpMessage, id, classNameContainerLabel, classNameContainerInput, label, messageType, isVisible, forceDisplayMessage, className, disabled = false, required, ...otherProps }, ref) => {
    const inputUseId = useId();
    const errorUseId = useId();
    const inputId = id ?? inputUseId;
    const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(classModifier, disabled, Boolean(children), required);
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsxs(LegacyField, { label: label, id: inputId, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: inputFieldClassModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, errorId: errorUseId, children: [_jsxs(FieldInput, { className: "af-form__date", classModifier: inputFieldClassModifier, children: [_jsx(Date, { id: inputId, classModifier: inputClassModifier, disabled: disabled, required: required, ref: ref, "aria-describedby": errorUseId, "aria-invalid": isInvalid, ...otherProps }), children] }), _jsx(HelpMessage, { message: helpMessage, isVisible: !message })] }));
});
DateInput.displayName = "DateInput";
export { DateInput };

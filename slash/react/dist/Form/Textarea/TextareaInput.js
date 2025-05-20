import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/common/grid.scss";
import "@axa-fr/design-system-slash-css/dist/common/reboot.scss";
import "@axa-fr/design-system-slash-css/dist/Form/core/FormCore.scss";
import { forwardRef, useId } from "react";
import { FieldInput, HelpMessage, LegacyField, useInputClassModifier, } from "../core";
import { Textarea } from "./Textarea";
import { useAriaInvalid } from "../core/useAriaInvalid";
const TextareaInput = forwardRef(({ id, classModifier = "", message, children, helpMessage, classNameContainerLabel, classNameContainerInput, label, messageType, isVisible, forceDisplayMessage, className, rows = 5, cols = 50, disabled = false, required, ...textareaInputProps }, inputRef) => {
    const rowModifier = `${classModifier} label-top`;
    const inputUseId = useId();
    const errorUseId = useId();
    const inputId = id ?? inputUseId;
    const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(classModifier, disabled, Boolean(children), required);
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsxs(LegacyField, { label: label, id: inputId, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: inputFieldClassModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, errorId: errorUseId, children: [_jsxs(FieldInput, { className: "af-form__textarea", classModifier: `${rowModifier} ${inputFieldClassModifier}`, children: [_jsx(Textarea, { ...textareaInputProps, id: inputId, rows: rows, cols: cols, classModifier: inputClassModifier, disabled: disabled, ref: inputRef, "aria-describedby": errorUseId, "aria-invalid": isInvalid }), children] }), _jsx(HelpMessage, { message: helpMessage, isVisible: !message })] }));
});
TextareaInput.displayName = "TextareaInput";
export { TextareaInput };

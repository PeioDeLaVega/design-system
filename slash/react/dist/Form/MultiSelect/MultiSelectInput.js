import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/MultiSelect/MultiSelect.scss";
import { useId } from "react";
import { FieldInput, HelpMessage, LegacyField, useInputClassModifier, } from "../core";
import { MultiSelect } from "./MultiSelect";
import { useAriaInvalid } from "../core/useAriaInvalid";
const MultiSelectInput = ({ classModifier, message, children, helpMessage, id, disabled, classNameContainerLabel, classNameContainerInput, label, messageType, isVisible, forceDisplayMessage, className, required, ...multiSelectProps }) => {
    const { inputFieldClassModifier } = useInputClassModifier(classModifier ?? "", disabled ?? false, Boolean(children), required);
    const generatedId = useId();
    const errorUseId = useId();
    const inputId = id || generatedId;
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsxs(LegacyField, { label: label, id: inputId, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: inputFieldClassModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, errorId: errorUseId, children: [_jsxs(FieldInput, { className: "af-form__select", classModifier: inputFieldClassModifier, children: [_jsx(MultiSelect, { inputId: inputId, disabled: disabled, required: required, "aria-invalid": isInvalid, "aria-errormessage": errorUseId, ...multiSelectProps }), children] }), _jsx(HelpMessage, { message: helpMessage, isVisible: !message })] }));
};
export { MultiSelectInput };

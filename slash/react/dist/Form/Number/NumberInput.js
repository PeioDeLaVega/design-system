import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/common/grid.scss";
import "@axa-fr/design-system-slash-css/dist/common/reboot.scss";
import "@axa-fr/design-system-slash-css/dist/Form/core/FormCore.scss";
import { useId, } from "react";
import { FieldInput, HelpMessage, LegacyField, useInputClassModifier, } from "../core";
import { Number } from "./Number";
import { useAriaInvalid } from "../core/useAriaInvalid";
export const NumberInput = ({ message, children, helpMessage, id, label, classNameContainerLabel, classNameContainerInput, forceDisplayMessage, messageType, isVisible, className, disabled = false, classModifier = "", required, ...otherProps }) => {
    const inputUseId = useId();
    const errorUseId = useId();
    const inputId = id ?? inputUseId;
    const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(classModifier, disabled, Boolean(children), required);
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsxs(LegacyField, { label: label, id: inputId, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: inputFieldClassModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, errorId: errorUseId, children: [_jsxs(FieldInput, { className: "af-form__text", classModifier: inputFieldClassModifier, children: [_jsx(Number, { id: inputId, classModifier: inputClassModifier, disabled: disabled, "aria-describedby": errorUseId, "aria-invalid": isInvalid, ...otherProps }), children] }), _jsx(HelpMessage, { message: helpMessage, isVisible: !message })] }));
};

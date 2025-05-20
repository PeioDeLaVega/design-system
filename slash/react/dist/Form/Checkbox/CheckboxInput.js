import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { LegacyField, MessageTypes, useOptionsWithId } from "../core";
import { Checkbox } from "./Checkbox";
import { CheckboxModes } from "./CheckboxModes";
import { useAriaInvalid } from "../core/useAriaInvalid";
const CheckboxInput = forwardRef(({ mode, messageType, message, classModifier, options, classNameContainerLabel, classNameContainerInput, label, isVisible, className, forceDisplayMessage, required, ...checkboxProps }, inputRef) => {
    let rowModifier = classModifier;
    if (mode === CheckboxModes.classic) {
        rowModifier += " label-top";
    }
    if (required) {
        rowModifier += " required";
    }
    const errorUseId = useId();
    const newOptions = useOptionsWithId(options);
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsx(LegacyField, { label: label, id: newOptions[0].id, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: rowModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, errorId: errorUseId, children: _jsx(Checkbox, { mode: mode, options: newOptions, classModifier: message && messageType === MessageTypes.error && forceDisplayMessage
                ? `${classModifier} error`
                : classModifier, ref: inputRef, "aria-describedby": errorUseId, "aria-invalid": isInvalid, ...checkboxProps }) }));
});
CheckboxInput.displayName = "CheckboxInput";
export { CheckboxInput };

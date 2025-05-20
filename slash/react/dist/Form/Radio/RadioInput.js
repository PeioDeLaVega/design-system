import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { LegacyField, getFirstId, useInputClassModifier, useOptionsWithId, } from "../core";
import { Radio, RadioModes } from "./Radio";
import { useAriaInvalid } from "../core/useAriaInvalid";
const RadioInput = forwardRef(({ mode, messageType, message, className, classModifier = "", isVisible, options, classNameContainerLabel, classNameContainerInput, label, forceDisplayMessage, children, required, disabled = false, ariaLabelContainer, ...radioProps }, inputRef) => {
    const rowModifier = `${classModifier ?? ""}${mode === RadioModes.classic ? " label-top " : ""}`;
    const newOptions = useOptionsWithId(options);
    const firstId = getFirstId(newOptions);
    const errorUseId = useId();
    const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(classModifier, disabled, Boolean(children), required);
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsxs(LegacyField, { label: label, id: firstId, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: rowModifier + inputFieldClassModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, roleContainer: "radiogroup", ariaLabelContainer: ariaLabelContainer ?? label?.toString(), isLabelContainerLinkedToInput: false, errorId: errorUseId, children: [_jsx(Radio, { options: newOptions, mode: mode, classModifier: inputClassModifier, ref: inputRef, disabled: disabled, required: required || classModifier?.includes("required"), "aria-describedby": errorUseId, "aria-invalid": isInvalid, ...radioProps }), children] }));
});
RadioInput.displayName = "EnhancedInputRadio";
export { RadioInput };

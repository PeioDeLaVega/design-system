import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { useId } from "react";
import { FieldError, FormClassManager, HelpMessage, useInputClassModifier, } from ".";
import { getComponentClassName } from "../../utilities";
export const Field = ({ classNameContainerInput = "col-md-10", classNameContainerLabel = "col-md-2", label, forceDisplayMessage, message, messageType, required, classModifier = "", children, disabled = false, helpMessage, id, isVisible = true, roleContainer, ariaLabelContainer, isLabelContainerLinkedToInput = true, errorId, renderInput, }) => {
    const inputUseId = useId();
    const inputId = id ?? inputUseId;
    const actualRequired = required || classModifier.includes("required");
    const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(classModifier, disabled, Boolean(children), actualRequired);
    if (!isVisible) {
        return null;
    }
    const fieldContainerClassName = getComponentClassName("af-form__text", forceDisplayMessage
        ? `${inputFieldClassModifier} ${FormClassManager.getModifier(messageType)}`
        : inputFieldClassModifier);
    return (_jsxs("div", { className: classNames("row af-form__group", {
            "af-form__group--required": actualRequired,
        }), role: roleContainer, "aria-label": ariaLabelContainer, children: [_jsx("div", { className: classNameContainerLabel, children: _jsx("label", { className: classNames("af-form__group-label", {
                        "af-form__group-label--required": actualRequired,
                    }), htmlFor: isLabelContainerLinkedToInput ? inputId : undefined, children: label }) }), _jsxs("div", { className: classNameContainerInput, children: [_jsxs("div", { className: fieldContainerClassName, children: [renderInput({
                                id: inputId,
                                classModifier: inputClassModifier,
                            }), children] }), forceDisplayMessage ? (_jsx(FieldError, { message: message, messageType: messageType, errorId: errorId })) : (_jsx(HelpMessage, { message: helpMessage }))] })] }));
};

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { getComponentClassName } from "../../utilities";
import { FieldError } from "./FieldError";
import { FieldForm } from "./FieldForm";
import { MessageTypes } from "./MessageTypes";
export const LegacyField = ({ id = "", message = "", messageType = MessageTypes.error, label, children, forceDisplayMessage, classModifier = "", className, classNameContainerLabel = "col-md-2", classNameContainerInput = "col-md-10", isVisible = true, roleContainer, ariaLabelContainer, isLabelContainerLinkedToInput = true, errorId, }) => {
    if (!isVisible) {
        return null;
    }
    const componentClassName = getComponentClassName(className, classModifier, "row af-form__group");
    return (_jsxs("div", { className: componentClassName, role: roleContainer, "aria-label": ariaLabelContainer, children: [_jsx("div", { className: classNameContainerLabel, children: _jsx("label", { className: classNames({
                        "af-form__group-label--required": classModifier.includes("required"),
                    }, "af-form__group-label"), htmlFor: isLabelContainerLinkedToInput ? id : undefined, children: label }) }), _jsxs(FieldForm, { className: classNameContainerInput, message: message, messageType: messageType, forceDisplayMessage: forceDisplayMessage, children: [children, _jsx(FieldError, { message: message, messageType: messageType, errorId: errorId })] })] }));
};

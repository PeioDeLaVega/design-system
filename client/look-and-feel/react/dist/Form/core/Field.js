import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "./getComponentClassName";
import { FieldError } from "./FieldError";
import { MessageTypes } from "./MessageTypes";
import { FieldForm } from "./FieldForm";
export const Field = ({ id = "", message = "", messageType = MessageTypes.error, label, children, forceDisplayMessage, classModifier = "", className, classNameContainerLabel = "col-md-2", classNameContainerInput = "col-md-10", isVisible = true, roleContainer, ariaLabelContainer, isLabelContainerLinkedToInput = true, }) => {
    if (!isVisible) {
        return null;
    }
    const componentClassName = getComponentClassName(className, classModifier, "row af-form__group");
    return (_jsxs("div", { className: componentClassName, role: roleContainer, "aria-label": ariaLabelContainer, children: [_jsx("div", { className: classNameContainerLabel, children: _jsx("label", { className: "af-form__group-label", htmlFor: isLabelContainerLinkedToInput ? id : undefined, children: label }) }), _jsxs(FieldForm, { className: classNameContainerInput, message: message, messageType: messageType, forceDisplayMessage: forceDisplayMessage, children: [children, _jsx(FieldError, { message: message, messageType: messageType })] })] }));
};

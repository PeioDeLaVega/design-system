import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, } from "react";
import { getComponentClassName } from "../../utilities/getComponentClassName";
const TextInput = forwardRef(({ unit, className, classModifier = "", helper, error, success, label, description, buttonLabel, onButtonClick, required, sideButtonLabel, onSideButtonClick, ItemLabelComponent, ItemMessageComponent, "aria-errormessage": ariaErrormessage, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName("af-form__input-text", className, classModifier + (error || ariaErrormessage ? " error" : ""));
    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idMessage = useId();
    const idHelp = useId();
    const idLabel = useId();
    return (_jsxs("div", { className: "af-form__input-container", children: [_jsx(ItemLabelComponent, { label: label, description: description, buttonLabel: buttonLabel, onButtonClick: onButtonClick, sideButtonLabel: sideButtonLabel, onSideButtonClick: onSideButtonClick, required: required, inputId: inputId, idLabel: idLabel }), _jsxs("div", { className: "af-form__input-variant", children: [_jsx("input", { id: inputId, className: componentClassName, type: "text", required: required, ref: inputRef, "aria-labelledby": idLabel, "aria-errormessage": ariaErrormessage ?? idMessage, "aria-invalid": Boolean(error || ariaErrormessage), "aria-describedby": idHelp, ...otherProps }), unit] }), helper && (_jsx("span", { id: idHelp, className: "af-form__input-helper", children: helper })), _jsx(ItemMessageComponent, { id: idMessage, message: error || success, messageType: error ? "error" : "success" })] }));
});
TextInput.displayName = "TextInput";
export { TextInput };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, } from "react";
import { getComponentClassName } from "../../utilities/getComponentClassName";
const TextArea = forwardRef(({ className, classModifier = "", label, description, helper, error, buttonLabel, onButtonClick, required, sideButtonLabel, ItemLabelComponent, ItemMessageComponent, onSideButtonClick, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName("af-form__input-textarea", className, classModifier);
    let inputId = useId();
    inputId = otherProps.id || inputId;
    const idError = useId();
    const idLabel = useId();
    return (_jsxs("div", { className: "af-form__input-container", children: [_jsx(ItemLabelComponent, { label: label, description: description, buttonLabel: buttonLabel, onButtonClick: onButtonClick, sideButtonLabel: sideButtonLabel, onSideButtonClick: onSideButtonClick, required: required, inputId: inputId, idLabel: idLabel }), _jsx("textarea", { id: inputId, className: componentClassName, ref: inputRef, "aria-errormessage": idError, "aria-invalid": Boolean(error), ...otherProps }), helper && _jsx("span", { className: "af-form__input-helper", children: helper }), _jsx(ItemMessageComponent, { id: idError, message: error })] }));
});
TextArea.displayName = "TextArea";
export { TextArea };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, } from "react";
import classNames from "classnames";
const Select = forwardRef(({ id, required, label, error, placeholder, children, helper, success, description, buttonLabel, onButtonClick, sideButtonLabel, onSideButtonClick, ItemLabelComponent, ItemMessageComponent, ...otherProps }, inputRef) => {
    const idLabel = useId();
    const idMessage = useId();
    let inputId = useId();
    inputId = id || inputId;
    const classname = classNames("af-form__select-input", error && "af-form__select-input--error");
    return (_jsxs("div", { children: [_jsx(ItemLabelComponent, { label: label, description: description, buttonLabel: buttonLabel, onButtonClick: onButtonClick, sideButtonLabel: sideButtonLabel, onSideButtonClick: onSideButtonClick, required: required, inputId: inputId, idLabel: idLabel }), _jsxs("select", { className: classname, ...otherProps, ref: inputRef, id: inputId, children: [Boolean(placeholder) && (_jsx("option", { disabled: true, value: "", children: placeholder })), children] }), helper && _jsx("span", { className: "af-form__input-helper", children: helper }), _jsx(ItemMessageComponent, { id: idMessage, message: error || success, messageType: error ? "error" : "success" })] }));
});
Select.displayName = "Select";
export { Select };

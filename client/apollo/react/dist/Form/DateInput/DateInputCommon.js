import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, } from "react";
import { getComponentClassName } from "../../utilities/getComponentClassName";
import { formatDateInputValue } from "./DateInput.helper";
const DateInput = forwardRef(({ className, classModifier = "", defaultValue, value, placeholder = "JJ/MM/AAAA", helper, error, success, label, description, buttonLabel, onButtonClick, ItemLabelComponent, ItemMessageComponent, required, "aria-errormessage": ariaErrormessage, type = "text", ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName("af-form__input-date", className ?? "", classModifier + (error || ariaErrormessage ? " error" : ""));
    let inputId = useId();
    inputId = otherProps.id ?? inputId;
    const idMessage = useId();
    const idHelp = useId();
    const idLabel = useId();
    return (_jsxs("div", { className: "af-form__input-container", children: [_jsx(ItemLabelComponent, { label: label, description: description, buttonLabel: buttonLabel, onButtonClick: onButtonClick, required: required, inputId: inputId, idLabel: idLabel }), _jsx("input", { ...otherProps, id: inputId, className: componentClassName, type: type, placeholder: placeholder || "", ref: inputRef, defaultValue: formatDateInputValue(type, defaultValue), value: formatDateInputValue(type, value), "aria-labelledby": idLabel, "aria-errormessage": ariaErrormessage ?? idMessage, "aria-invalid": Boolean(error ?? ariaErrormessage), "aria-describedby": idHelp, required: required }), helper && (_jsx("span", { id: idHelp, className: "af-form__input-helper", children: helper })), _jsx(ItemMessageComponent, { id: idMessage, message: error ?? success, messageType: error ? "error" : "success" })] }));
});
DateInput.displayName = "DateInput";
export { DateInput };

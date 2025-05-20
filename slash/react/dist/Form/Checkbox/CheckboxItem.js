import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { getOptionClassName } from "../core";
import "@axa-fr/design-system-slash-css/dist/Form/Checkbox/Checkbox.scss";
const CheckboxItem = forwardRef(({ disabled = false, value = "", id, children, label, isChecked, className, classModifier, ...otherProps }, inputRef) => {
    const newLabel = children || label;
    const generatedId = useId();
    const newId = id ?? generatedId;
    const optionClassName = getOptionClassName(className ?? "", classModifier ?? "", "af-form__checkbox", disabled);
    return (_jsxs("div", { className: optionClassName, children: [_jsx("input", { ...otherProps, className: "af-form__input-checkbox", value: value, id: newId, disabled: disabled, checked: isChecked, type: "checkbox", ref: inputRef }), _jsxs("label", { className: "af-form__label", htmlFor: newId, children: [_jsx("span", { className: "af-form__indicator", children: _jsx("i", { className: "glyphicon glyphicon-ok" }) }), _jsx("span", { className: "af-form__description", children: newLabel })] })] }));
});
CheckboxItem.displayName = "CheckboxItem";
export { CheckboxItem };

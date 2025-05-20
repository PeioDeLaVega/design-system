import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/Radio/Radio.scss";
import { forwardRef, useId } from "react";
import { getOptionClassName } from "../core";
const RadioItem = forwardRef(({ value = "", id, isChecked, children, label, classModifier = "", className = "", disabled = false, ...otherProps }, inputRef) => {
    const optionClassName = getOptionClassName(className, classModifier, "af-form__radio", disabled);
    const newLabel = children || label;
    const generatedId = useId();
    const newId = id ?? generatedId;
    return (_jsxs("div", { className: optionClassName, children: [_jsx("input", { ...otherProps, className: "af-form__input-radio", id: newId, type: "radio", value: value, checked: isChecked, ref: inputRef, disabled: disabled }), _jsx("label", { className: "af-form__label", htmlFor: newId, children: _jsx("span", { className: "af-form__description", children: newLabel }) })] }, value));
});
RadioItem.displayName = "RadioItem";
export { RadioItem };

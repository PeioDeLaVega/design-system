import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { forwardRef } from "react";
import { CheckboxItem } from "./CheckboxItem";
import { CheckboxModes } from "./CheckboxModes";
const defaultClassName = (mode) => {
    switch (mode) {
        case CheckboxModes.default:
            return "af-form__checkbox-custom";
        case CheckboxModes.classic:
            return "af-form__checkbox";
        default:
            return `af-form__checkbox-${mode}`;
    }
};
const CheckboxInner = forwardRef(({ id, name, options, disabled, children, values = [], mode = CheckboxModes.default, onChange = () => { }, ...otherProps }, inputRef) => {
    const className = defaultClassName(mode);
    const handleOnChange = ({ target: { value, checked }, }) => {
        const newValues = checked
            ? [...values, value]
            : values.filter((v) => v !== value);
        onChange({ values: newValues, target: { value, checked }, id, name });
    };
    return (_jsx(_Fragment, { children: options.map((option) => {
            const isChecked = values ? values.indexOf(option.value) >= 0 : false;
            return (_createElement(CheckboxItem, { ...otherProps, onChange: handleOnChange, key: option.value, className: className, isChecked: isChecked, name: name, disabled: option.disabled || disabled, ref: inputRef, ...option }, children));
        }) }));
});
CheckboxInner.displayName = "Checkbox";
export const Checkbox = CheckboxInner;

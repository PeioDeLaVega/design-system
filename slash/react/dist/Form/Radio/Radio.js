import { createElement as _createElement } from "react";
import { forwardRef } from "react";
import { RadioItem } from "./RadioItem";
export var RadioModes;
(function (RadioModes) {
    RadioModes["classic"] = "classic";
    RadioModes["default"] = "default";
    RadioModes["inline"] = "inline";
})(RadioModes || (RadioModes = {}));
const getClassNameMode = (mode) => {
    switch (mode) {
        case RadioModes.classic:
            return "af-form__radio";
        case RadioModes.inline:
            return "af-form__radio-inline";
        default:
            return "af-form__radio-custom";
    }
};
const Radio = forwardRef(({ classModifier, options, value = "", mode = RadioModes.default, children, disabled, ...otherProps }, inputRef) => {
    const classNameMode = getClassNameMode(mode);
    return options.map((option) => (_createElement(RadioItem, { ...otherProps, key: option.value, isChecked: option.value === value, disabled: option.disabled || disabled, className: classNameMode, classModifier: classModifier, ref: inputRef, ...option }, children)));
});
Radio.displayName = "EnhancedInputRadio";
export { Radio };

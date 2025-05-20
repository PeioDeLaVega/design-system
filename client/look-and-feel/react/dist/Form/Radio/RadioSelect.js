import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Radio.scss";
import radioIcon from "@material-symbols/svg-400/outlined/radio_button_checked.svg";
import radioOutlineBlankIcon from "@material-symbols/svg-400/outlined/radio_button_unchecked.svg";
import { forwardRef, useCallback, useId, } from "react";
import { Svg } from "../../Svg";
import { InputError } from "../InputError";
import { getComponentClassName } from "../../utilities/helpers/getComponentClassName";
export const RadioSelect = forwardRef(({ className, id, label, description, options, errorMessage, onChange, type = "vertical", name, value, isDisabled, isRequired, ...rest }, ref) => {
    const componentClassName = getComponentClassName("af-radio__container", className);
    const radioGroupClassName = getComponentClassName(`af-radio af-radio-select af-radio-select--${type}`, className);
    const generatedId = useId();
    const optionId = id || generatedId;
    const getRef = useCallback((index, reference, val, inputVal) => {
        if ((!val && index === 0) || val === inputVal) {
            return reference;
        }
        return null;
    }, []);
    return (_jsxs("div", { className: componentClassName, children: [_jsxs("div", { className: "af-radio__label-container", children: [label && (_jsxs("span", { className: "af-radio__label", id: optionId, children: [label, isRequired && _jsx("span", { "aria-hidden": "true", children: "\u00A0*" })] })), description && (_jsx("span", { className: "af-radio__description", children: description }))] }), _jsx("div", { ...rest, role: "radiogroup", className: radioGroupClassName, "aria-invalid": Boolean(errorMessage), "aria-labelledby": optionId, "aria-errormessage": `${optionId}-error`, children: options.map(({ label: inputLabel, description: inputDescription, subtitle, icon, disabled: inputDisabled, ...inputProps }, idx) => (_jsxs("label", { htmlFor: `${optionId}-${inputLabel}`, children: [_jsx("input", { type: "radio", ...(isDisabled || inputDisabled ? { disabled: true } : null), ...inputProps, name: name, id: `${optionId}-${inputLabel}`, onChange: onChange, "aria-checked": value === inputProps.value, checked: value === inputProps.value, ref: getRef(idx, ref, value, inputProps.value) }), _jsxs("div", { className: "af-radio__icons", children: [_jsx(Svg, { src: radioOutlineBlankIcon, className: "af-radio__unchecked" }), _jsx(Svg, { src: radioIcon, className: "af-radio__checked" })] }), _jsxs("div", { className: "af-radio__content", children: [icon, _jsxs("div", { className: "af-radio__content-description", children: [_jsx("span", { children: inputLabel }), inputDescription && _jsx("span", { children: inputDescription }), subtitle && _jsx("span", { children: subtitle })] })] })] }, inputLabel))) }), errorMessage && (_jsx(InputError, { id: `${optionId}-error`, message: errorMessage }))] }));
});
RadioSelect.displayName = "RadioSelect";

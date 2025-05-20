import { jsx as _jsx } from "react/jsx-runtime";
import { useId } from "react";
import ReactSelect from "react-select";
import ReactSelectAsync from "react-select/async";
const MultiSelect = ({ id, name, loadOptions, values, options, value, onChange, onBlur, placeholder = "Select", className = "react-select", disabled, loadingMessage = () => "Chargement...", ...otherProps }) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const handleOnChange = (newValue) => {
        if (!onChange)
            return;
        let onChangeProps = {
            name: name ?? "",
            id: inputId,
        };
        if (values) {
            onChangeProps = {
                ...onChangeProps,
                values: (newValue || []).map((v) => v.value),
            };
        }
        else {
            onChangeProps = {
                ...onChangeProps,
                value: newValue?.value,
            };
        }
        onChange(onChangeProps);
    };
    const commonProps = {
        inputId,
        name,
        onChange: handleOnChange,
        onBlur,
        placeholder,
        className,
        isDisabled: disabled,
        options,
        valueKey: "value",
        labelKey: "label",
        ...otherProps,
    };
    if (values) {
        const newValues = options.filter((opt) => values.includes(opt.value));
        return loadOptions ? (_jsx(ReactSelectAsync, { ...commonProps, isMulti: true, value: newValues, loadOptions: loadOptions, loadingMessage: loadingMessage })) : (_jsx(ReactSelect, { ...commonProps, isMulti: true, value: newValues }));
    }
    const newValue = options.find((o) => o.value === value);
    const commonValueProps = {
        ...commonProps,
        multi: false,
        value: newValue,
    };
    return loadOptions ? (_jsx(ReactSelectAsync, { ...commonValueProps, loadOptions: loadOptions, loadingMessage: loadingMessage })) : (_jsx(ReactSelect, { ...commonValueProps }));
};
export { MultiSelect };

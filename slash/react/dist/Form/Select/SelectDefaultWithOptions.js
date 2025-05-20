import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useId, useMemo, useState, } from "react";
import { SelectBase } from "./SelectBase";
export const SelectDefaultWithOptions = forwardRef(({ onChange, forceDisplayPlaceholder = false, value, placeholder = "- Select -", options, id, ...otherProps }, inputRef) => {
    const [hasHandleChangeOnce, setHasHandleChangeOnce] = useState(false);
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const newOptions = useMemo(() => hasHandleChangeOnce || otherProps.defaultValue !== undefined
        ? options
        : [{ value: "", label: placeholder }, ...options], [hasHandleChangeOnce, options, otherProps.defaultValue, placeholder]);
    return (_jsx(SelectBase, { ...otherProps, id: inputId, value: value, options: newOptions, onChange: (e) => {
            if (onChange) {
                onChange(e);
            }
            setHasHandleChangeOnce(!forceDisplayPlaceholder);
        }, ref: inputRef }));
});
SelectDefaultWithOptions.displayName = "SelectDefaultWithOptions";

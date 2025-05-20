import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useState } from "react";
import { SelectBase } from "./SelectBase";
const SelectDefault = forwardRef(({ onChange, forceDisplayPlaceholder = false, value, placeholder = "- Select -", id, children, ...otherProps }, inputRef) => {
    const [hasHandleChangeOnce, setHasHandleChangeOnce] = useState(false);
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const childrenWithDefault = (_jsxs(_Fragment, { children: [!(hasHandleChangeOnce || otherProps.defaultValue !== undefined) && (_jsx("option", { value: "", children: placeholder })), children] }));
    return (_jsx(SelectBase, { ...otherProps, id: inputId, value: value, onChange: (e) => {
            if (onChange) {
                onChange(e);
            }
            setHasHandleChangeOnce(!forceDisplayPlaceholder);
        }, ref: inputRef, children: childrenWithDefault }));
});
SelectDefault.displayName = "SelectDefault";
export { SelectDefault };

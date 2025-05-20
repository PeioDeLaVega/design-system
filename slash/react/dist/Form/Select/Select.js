import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, } from "react";
import { SelectBase } from "./SelectBase";
import { SelectDefault } from "./SelectDefault";
import { SelectDefaultWithOptions } from "./SelectDefaultWithOptions";
const Select = forwardRef(({ mode = "default", children, options, ...props }, inputRef) => {
    if (mode === "default") {
        return options ? (_jsx(SelectDefaultWithOptions, { ref: inputRef, ...props, options: options })) : (_jsx(SelectDefault, { ref: inputRef, ...props, children: children }));
    }
    return (_jsx(SelectBase, { ref: inputRef, ...props, options: options, children: children }));
});
Select.displayName = "Select";
export { Select };

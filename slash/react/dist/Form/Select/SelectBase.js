import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/Select/Select.scss";
import { forwardRef, } from "react";
import { getComponentClassName } from "../../utilities";
const SelectBase = forwardRef(({ options, id, className, classModifier, required, children, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-form__input-select");
    return (_jsxs("div", { className: "af-form__select-container", children: [_jsx("select", { ...otherProps, id: id, className: componentClassName, ref: inputRef, required: classModifier?.includes("required") || required, children: children ??
                    options?.map(({ label, ...opt }) => (_jsx("option", { ...opt, children: label }, opt.value?.toString()))) }), _jsx("span", { "aria-controls": id, className: "glyphicon glyphicon-menu-down" })] }));
});
SelectBase.displayName = "SelectBase";
export { SelectBase };

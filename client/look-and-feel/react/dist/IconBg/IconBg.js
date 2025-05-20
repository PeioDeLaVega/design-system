import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { getComponentClassName } from "../utilities";
export const IconBg = ({ children, className, classModifier, isDisabled = false, }) => {
    const componentClassName = useMemo(() => {
        let newClassModifier = classModifier;
        if (isDisabled) {
            newClassModifier += " disabled";
        }
        return getComponentClassName("af-icon-bg", className, newClassModifier);
    }, [classModifier, isDisabled, className]);
    return _jsx("div", { className: componentClassName, children: children });
};

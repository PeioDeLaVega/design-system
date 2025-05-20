import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
export const Divider = ({ className, classModifier }) => {
    const componentClassName = useMemo(() => getComponentClassName("af-divider", className, classModifier), [className, classModifier]);
    return _jsx("hr", { className: componentClassName });
};

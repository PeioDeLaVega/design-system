import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { Svg } from "../Svg/Svg";
export const iconVariants = {
    primary: "primary",
    secondary: "secondary",
    disabled: "disabled",
};
export const iconSizeVariants = {
    L: "large",
    M: "medium",
    S: "small",
    XS: "extra-small",
};
export const Icon = ({ variant = "primary", size = "S", hasBackground = false, ...props }) => {
    const componentClassName = useMemo(() => {
        const newClassModifier = [
            variant,
            iconSizeVariants[size],
            hasBackground && "has-background",
        ]
            .filter(Boolean)
            .join(" ");
        return getComponentClassName("af-icon", "", newClassModifier);
    }, [variant, hasBackground, size]);
    return (_jsx("div", { className: componentClassName, children: _jsx(Svg, { ...props }) }));
};

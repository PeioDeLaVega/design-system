import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { getComponentClassName } from "../utilities";
import "@axa-fr/design-system-slash-css/dist/Badge/Badge.scss";
export const Badge = forwardRef(({ children, className, classModifier, ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-badge");
    return (_jsx("span", { ref: ref, className: componentClassName, ...otherProps, children: children }));
});
Badge.displayName = "Badge";

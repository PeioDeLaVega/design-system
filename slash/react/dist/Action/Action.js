import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Action/Action.scss";
import { forwardRef } from "react";
import { getComponentClassName } from "../utilities";
export const Action = forwardRef(({ icon, className, classModifier, ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(className, classModifier, "btn af-btn--circle");
    return (_jsx("a", { ...otherProps, className: componentClassName, ref: ref, children: _jsx("i", { role: "img", className: `glyphicon glyphicon-${icon}` }) }));
});
Action.displayName = "Action";

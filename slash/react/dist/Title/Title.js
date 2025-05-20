import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Title/Title.scss";
import { forwardRef, } from "react";
import { getComponentClassName } from "../utilities";
const baseClass = "af-title";
export const Title = forwardRef(({ className, classModifier, children, heading: Heading = "h2", contentLeft, contentRight, ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(className, classModifier, baseClass);
    return (_jsxs("div", { className: `${baseClass}--container`, children: [_jsxs(Heading, { ref: ref, className: componentClassName, ...otherProps, children: [children, contentLeft] }), contentRight ? (_jsx("div", { className: "content-right", children: contentRight })) : null] }));
});
Title.displayName = "Title";

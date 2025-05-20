import { jsxs as _jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { forwardRef, } from "react";
import "@axa-fr/design-system-slash-css/dist/Link/Link.scss";
export const Link = forwardRef(({ className, component: Component = "a", leftIcon, rightIcon, target, rel, disabled, children, ...props }, ref) => {
    return (_jsxs(Component, { className: classnames("af-slash-link", className), target: target, rel: target === "_blank" ? "noopener noreferrer" : rel, "aria-disabled": disabled ?? props["aria-disabled"], ...props, ref: ref, children: [leftIcon, children, rightIcon] }));
});
Link.displayName = "Link";

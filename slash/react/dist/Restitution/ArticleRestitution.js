import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
export const ArticleRestitution = ({ children, className, classModifier, ...otherProps }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-restitution");
    return (_jsx("article", { className: componentClassName, ...otherProps, children: children }));
};

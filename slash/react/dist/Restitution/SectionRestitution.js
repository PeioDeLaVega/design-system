import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
export const SectionRestitution = ({ children, className, classModifier, }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-restitution__content");
    return _jsx("section", { className: componentClassName, children: children });
};

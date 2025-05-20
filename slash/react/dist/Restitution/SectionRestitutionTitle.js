import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
export const SectionRestitutionTitle = ({ title, className, classModifier, }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-restitution__content-title");
    return _jsx("h4", { className: componentClassName, children: title });
};

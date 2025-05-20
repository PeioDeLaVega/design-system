import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
import { SectionRestitutionTitle } from "./SectionRestitutionTitle";
const DEFAULT_CLASSNAME = "col col-sm-12 col-md-12 col-lg-12 col-xl-12";
export const SectionRestitutionRow = ({ title, className = DEFAULT_CLASSNAME, classNameContainer = "row af-restitution__content-left", children, classModifier, }) => {
    const componentClassName = getComponentClassName(className, classModifier, DEFAULT_CLASSNAME);
    return (_jsxs("div", { className: componentClassName, children: [title ? _jsx(SectionRestitutionTitle, { title: title }) : null, _jsx("div", { className: classNameContainer, children: children })] }));
};

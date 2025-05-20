import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
import { SectionRestitutionTitle } from "./SectionRestitutionTitle";
export const SectionRestitutionColumn = ({ children, className, title, classModifier, }) => {
    const componentClassName = getComponentClassName(className, classModifier, "col-sm-12 col-md-12 col-lg-6 col-xl-6");
    return (_jsxs("div", { className: componentClassName, children: [title ? _jsx(SectionRestitutionTitle, { title: title }) : null, children] }));
};

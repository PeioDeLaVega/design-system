import { jsx as _jsx } from "react/jsx-runtime";
export const RestitutionList = ({ values, ...props }) => {
    return (_jsx("ul", { className: "af-restitution__listul", ...props, children: values.map((value) => (_jsx("li", { className: "af-restitution__listul-item", children: value }, value))) }));
};

import { jsx as _jsx } from "react/jsx-runtime";
const Body = ({ children, ariaLabelledby }) => {
    return (_jsx("div", { className: "af-accordion__content", "aria-labelledby": ariaLabelledby, children: _jsx("div", { children: children }) }));
};
export { Body };

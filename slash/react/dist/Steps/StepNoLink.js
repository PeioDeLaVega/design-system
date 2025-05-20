import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StepBase } from "./StepBase";
const StepNoLink = ({ number, title, className = "af-steps-list-step", ...otherProps }) => (_jsx(StepBase, { className: `${className} ${number ? "number" : ""}`, title: title, ...otherProps, children: _jsxs("div", { className: "af-steps-list-step__label", children: [Boolean(number) && (_jsx("div", { className: "af-steps-list-step__number", children: number })), _jsx("div", { className: "af-steps-list-step__title", children: title })] }) }));
export { StepNoLink };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StepBase } from "./StepBase";
const StepLink = ({ id, href, number, title, className = "past af-steps-list-step", onClick, ...otherProps }) => (_jsx(StepBase, { id: id, className: `${className} ${number ? "number" : ""}`, title: title, ...otherProps, children: _jsxs("a", { className: "af-steps-list-step__label", href: href, onClick: (e) => {
            e.preventDefault();
            onClick?.({ href, id, title, number });
        }, children: [Boolean(number) && (_jsx("div", { className: "af-steps-list-step__number", children: number })), _jsx("div", { className: "af-steps-list-step__title", children: title })] }) }));
export { StepLink };

import { jsx as _jsx } from "react/jsx-runtime";
const Pane = ({ children, className = "af-tabs__pane", active, }) => {
    if (!active) {
        return null;
    }
    return _jsx("div", { className: className, children: children });
};
export { Pane };

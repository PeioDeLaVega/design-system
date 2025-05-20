import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.scss";
export const DebugGridCommon = ({ cols = 12 }) => {
    return (_jsx("div", { className: "debug-grid", children: _jsx("div", { className: "grid", children: [...Array(cols).keys()].map((col) => (_jsx("div", { className: "cols" }, col))) }) }));
};

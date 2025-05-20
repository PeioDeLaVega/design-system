import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const InnerUser = ({ name, profile }) => (_jsxs(_Fragment, { children: [_jsx("span", { className: "af-info-user__name", children: name }, "1"), profile && (_jsxs("span", { className: "af-info-user__profile", children: ["[", profile, "]"] }, "2"))] }));
export { InnerUser };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FileErrors = ({ errors }) => (_jsxs("div", { className: "af-form__file-errors", children: [_jsx("span", { children: "Le chargement de certains fichiers a \u00E9chou\u00E9 : " }), _jsx("ul", { className: "af-form__file-errors-list", children: errors &&
                errors.map((err) => (_jsxs("li", { children: [err.file.name, " (", err.file.size, ")"] }, err.file.name))) })] }));
export { FileErrors };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import errorIcon from "@material-symbols/svg-400/outlined/error.svg";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/InputError/InputError.scss";
import { Svg } from "../../Svg";
export const InputError = ({ message, id }) => (_jsxs("div", { className: "af-input-error", children: [_jsx(Svg, { src: errorIcon, className: "af-input-error__icon" }), _jsx("span", { id: id, "aria-live": "assertive", className: "af-input-error__message", children: message })] }));

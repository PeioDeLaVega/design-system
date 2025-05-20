import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import successIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import { Svg } from "../../Svg/Svg";
export const ItemMessage = ({ message, id, messageType = "error", }) => {
    if (!message) {
        return null;
    }
    return (_jsxs("small", { className: `af-item-message af-item-message--${messageType}`, role: messageType === "error" ? "alert" : undefined, "aria-live": "assertive", children: [_jsx(Svg, { src: messageType === "error" ? errorIcon : successIcon, className: "af-item-message__icon", "aria-hidden": "true" }), _jsx("span", { id: id, className: "af-item-message__message", children: message })] }));
};

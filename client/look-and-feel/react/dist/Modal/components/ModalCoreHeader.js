import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import closeSmall from "@material-symbols/svg-400/outlined/close.svg";
import { Button } from "../../Button/Button";
import { Svg } from "../../Svg";
export const ModalCoreHeader = ({ className, title, subtitle, iconTitle, levelTitle = 2, onCancel, closeButtonAriaLabel = "Fermer la boite de dialogue", ...props }) => {
    const HLevel = `h${levelTitle}`;
    return (_jsxs("header", { className: ["af-modal__header", className].filter(Boolean).join(" "), ...props, children: [_jsx(Button, { variant: "ghost", iconLeft: _jsx(Svg, { src: closeSmall, width: 32, height: 32, role: "graphics-document" }), "aria-label": closeButtonAriaLabel, onClick: onCancel }), _jsxs("div", { className: "af-modal__header-title", children: [iconTitle && (_jsx(Svg, { src: iconTitle, width: 32, height: 32, role: "graphics-document" })), _jsx(HLevel, { className: "af-modal__header-title-heading", children: title }), subtitle && (_jsx("span", { className: "af-modal__header-title-subtitle", children: subtitle }))] })] }));
};

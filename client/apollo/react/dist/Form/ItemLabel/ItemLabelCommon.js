import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, } from "react";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import { Svg } from "../../Svg/Svg";
export const ItemLabel = ({ label, description, required, inputId, idLabel, sideButtonLabel, onSideButtonClick, buttonLabel, onButtonClick, ButtonComponent, }) => {
    const idDescription = useId();
    if (!label && !description && !buttonLabel && !sideButtonLabel) {
        return null;
    }
    return (_jsxs("div", { className: "af-item-label", children: [label && (_jsxs("label", { htmlFor: inputId, id: idLabel, "aria-describedby": description ? idDescription : undefined, children: [label, " ", required && _jsx("span", { "aria-hidden": "true", children: " *" })] })), sideButtonLabel && (_jsx(ButtonComponent, { variant: "ghost", onClick: onSideButtonClick, className: "af-item-label__sidebutton", children: sideButtonLabel })), description && (_jsx("span", { id: idDescription, className: "af-item-label__description", children: description })), buttonLabel && (_jsx(ButtonComponent, { className: "af-item-label__more", variant: "ghost", iconLeft: _jsx(Svg, { src: infoIcon, "aria-hidden": "true" }), onClick: onButtonClick, children: buttonLabel }))] }));
};

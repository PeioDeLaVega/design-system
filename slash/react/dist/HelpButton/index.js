import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Action/Action.scss";
import { Popover } from "../Popover";
import { getComponentClassName } from "../utilities";
export const HelpButton = ({ className, classModifier, children, mode = "click", placement = "right", helpButtonContent = _jsx("span", { className: "af-more-help", children: "i" }), }) => {
    const buttonClassName = getComponentClassName("btn af-btn--circle", classModifier, "");
    return (_jsx(Popover, { className: className, classModifier: classModifier, placement: placement, mode: mode, popoverElement: children, children: _jsx("div", { className: buttonClassName, children: helpButtonContent }) }));
};

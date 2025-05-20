import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Button/Button.scss";
import { getComponentClassName } from "../utilities";
export const Button = ({ children, classModifier, className, ...args }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-btn");
    return (_jsx("button", { className: componentClassName, type: "button", ...args, children: children }));
};

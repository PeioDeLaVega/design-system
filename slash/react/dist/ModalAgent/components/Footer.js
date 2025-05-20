import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../..";
const Footer = ({ classModifier, className, ...rest }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-modal__footer");
    return _jsx("footer", { ...rest, className: componentClassName });
};
export { Footer };

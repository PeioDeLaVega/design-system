import { cloneElement, isValidElement, } from "react";
const ToggleButton = ({ children, idControl }) => isValidElement(children) &&
    cloneElement(children, {
        ...children.props,
        "aria-controls": idControl,
        "aria-haspopup": true,
    });
export { ToggleButton };

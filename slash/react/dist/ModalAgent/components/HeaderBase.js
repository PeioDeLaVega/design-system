import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../..";
const HeaderBase = ({ classModifier, className, ...rest }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-modal__header");
    return _jsx("header", { ...rest, className: componentClassName });
};
export { HeaderBase };

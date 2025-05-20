import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import "@axa-fr/design-system-slash-css/dist/Accordion/Accordion.scss";
import { useId } from "react";
import { getComponentClassName } from "../utilities";
import { CollapseCard } from "./CollapseCard";
const defaultClassName = "af-accordion";
const Accordion = ({ className, classModifier, children, onlyOne = false, }) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    const id = useId();
    const childrenArray = Array.isArray(children) ? children : [children];
    return (_jsx("div", { className: componentClassName, children: childrenArray.map((child) => (_createElement(CollapseCard, { ...child.props, name: onlyOne ? id : undefined, key: child.props.id }, child.props.children))) }));
};
export { Accordion };

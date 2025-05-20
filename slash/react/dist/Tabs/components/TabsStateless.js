import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, isValidElement, } from "react";
import { getComponentClassName } from "../..";
import { Pane } from "./Pane";
import { Title } from "./Title";
const TabsStateless = ({ activeIndex, className = "af-tabs", classModifier, children, onChange, }) => {
    const componentClassName = getComponentClassName(className, classModifier);
    return (_jsxs("div", { className: componentClassName, children: [_jsx("ul", { className: "af-tabs__control", children: Children.map(children, (child, index) => isValidElement(child) && (_jsx(Title, { active: activeIndex === index.toString(), onChange: onChange, id: `${index}`, classModifier: child.props.classModifier, children: child.props.title }, `title-${index}`))) }), _jsx("div", { className: "af-tabs__content", children: Children.map(children, (child, index) => isValidElement(child) && (_jsx(Pane, { active: activeIndex === index.toString(), children: child.props.children }, `pane-${index}`))) })] }));
};
export { TabsStateless };

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/NestedQuestion/NestedQuestion.scss";
import { getComponentClassName } from "../../utilities";
export const NestedQuestion = ({ children, className, }) => {
    const componentClassName = getComponentClassName(className, "", "af-form__nested-question");
    return (_jsxs("section", { className: componentClassName, children: [_jsx("div", { className: `${componentClassName}-arrow` }), _jsx("section", { children: children })] }));
};

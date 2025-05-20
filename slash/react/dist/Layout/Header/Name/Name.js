import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Name/Name.scss";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Logo/Logo.scss";
import { getComponentClassName } from "../../../utilities";
const defaultClassName = "af-header__name";
const Name = ({ alt = "logo", classModifier, className, img, onClick, subtitle, title, }) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    return (_jsxs("div", { className: componentClassName, children: [_jsx("a", { className: "af-logo", href: "/", onClick: (event) => onClick && onClick({ event }), children: _jsx("img", { className: "af-logo__brand", src: img, alt: alt }) }), _jsxs("h2", { className: "af-header__title", children: [title, _jsx("span", { className: "af-header__subtitle", children: subtitle })] })] }));
};
export { Name };

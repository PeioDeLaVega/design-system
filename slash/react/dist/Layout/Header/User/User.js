import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InnerUser } from "./InnerUser";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/User/User.scss";
import { getComponentClassName } from "../../../utilities";
const defaultClassName = "af-info-user";
const User = ({ children, classModifier, className, href, name, path, profile, onClick, title = "Voir mon profil", }) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    return (_jsxs("div", { className: componentClassName, children: [href ? (_jsx("a", { "aria-label": "user info link", className: `${defaultClassName}__link`, href: href, title: title, onClick: (event) => onClick && onClick({ path, event }), children: _jsx(InnerUser, { name: name, profile: profile }) })) : (_jsx(InnerUser, { name: name, profile: profile })), children] }));
};
export { User };

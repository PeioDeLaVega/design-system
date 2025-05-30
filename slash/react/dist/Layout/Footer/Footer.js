import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import logo from "@axa-fr/design-system-slash-css/logo-axa.svg";
import "@axa-fr/design-system-slash-css/dist/Layout/Footer/Footer.scss";
import { forwardRef } from "react";
export const Footer = forwardRef(({ className = "af-footer", href = "https://www.axa.fr/", title = "Site Axa", icon = logo, alt = "Logo Axa", children = `© ${new Date().getFullYear()} AXA Tous droits réservés`, ...props }, ref) => (_jsx("footer", { ref: ref, className: className, ...props, children: _jsxs("div", { className: "container-fluid container", children: [Boolean(icon) && (_jsx("a", { className: "af-logo", href: href, title: title, target: "blank", rel: "noopener noreferrer", children: _jsx("img", { className: "af-logo__brand", src: icon, alt: alt }) })), _jsx("div", { className: "af-footer-content", children: children })] }) })));
Footer.displayName = "Footer";

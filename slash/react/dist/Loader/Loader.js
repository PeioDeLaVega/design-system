import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Loader/Loader.scss";
import { getComponentClassName } from "../utilities";
const getText = (index) => {
    switch (index) {
        case "get":
            return "Chargement en cours";
        case "post":
            return "Sauvegarde en cours";
        case "delete":
            return "Suppression en cours";
        case "update":
            return "Mise à jour en cours";
        case "error":
            return "Une erreur est survenue lors du chargement du composant";
        default:
            return "";
    }
};
export const Loader = ({ className, text, children, classModifier, mode = "none", }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-loader");
    const message = text || getText(mode);
    const isLoaderVisible = mode !== "none";
    const isLoaderInError = mode === "error";
    return (_jsxs("div", { className: componentClassName, children: [children, isLoaderVisible && (_jsx("div", { className: `${componentClassName} af-loader-on`, children: _jsxs("div", { className: "af-spinner", role: "alert", "aria-live": "assertive", "aria-busy": !isLoaderInError, "aria-label": message, children: [!isLoaderInError && _jsx("div", { className: "af-spinner__animation" }), _jsx("div", { className: "af-spinner__caption", children: message })] }) }))] }));
};

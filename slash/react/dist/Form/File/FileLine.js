import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "../../utilities";
const FileLine = ({ className, classModifier, file, disabled, id, onClick, }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-form__file-line");
    return (_jsxs("li", { className: componentClassName, children: [file && file.type && file.type.startsWith("image") ? (_jsx("i", { className: "glyphicon glyphicon-picture" })) : (_jsx("i", { className: "glyphicon glyphicon-file" })), _jsx("span", { children: file.name }), _jsx("span", { children: file.size }), _jsx("button", { disabled: disabled, type: "button", className: "af-link af-link--delete-file", onClick: () => onClick(id), children: _jsx("span", { className: "af-link__text", children: "Supprimer" }) })] }));
};
export { FileLine };

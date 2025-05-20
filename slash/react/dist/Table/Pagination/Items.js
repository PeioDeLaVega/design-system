import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { getComponentClassName } from "../../utilities";
import { Select } from "../../Form/Select";
const Items = ({ className, classModifier, onChange, displayLabel = "Afficher", elementsLabel = "éléments", selectAriaLabel = "Modifier le nombre d'éléments à afficher dans le tableau", id, items = [5, 10, 25, 50, 100], numberItems = 10, }) => {
    const defaultIdName = useId();
    const newId = id ?? defaultIdName;
    const componentClassName = getComponentClassName(className, classModifier, "af-paging__form");
    return (_jsx("div", { className: "af-paging__limit", children: _jsx("form", { className: componentClassName, children: _jsxs("div", { className: "af-form__group", children: [_jsx("div", { className: "col col-sm-2 col-md-2 col-lg-2 col-xl-2", children: _jsx("label", { className: "af-form__group-label", htmlFor: newId, children: displayLabel }) }), _jsxs("div", { className: "col col-sm-10 col-md-10 col-lg-10 col-xl-10", children: [_jsx(Select, { id: newId, value: numberItems, mode: "base", options: items.map((item) => ({
                                    label: item.toString(),
                                    value: item.toString(),
                                })), onChange: (e) => {
                                    e.preventDefault();
                                    onChange({ value: Number(e.target.value) });
                                }, "aria-label": selectAriaLabel }), _jsx("span", { className: "af-form__input-cmplt", children: elementsLabel })] })] }) }) }));
};
export { Items };

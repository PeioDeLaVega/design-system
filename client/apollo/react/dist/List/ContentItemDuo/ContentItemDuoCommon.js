import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, } from "react";
import { getComponentClassName } from "../../utilities/getComponentClassName";
export const ContentItemDuo = ({ label, value, isVertical = false, className, classModifier, buttonText, onButtonClick, ButtonComponent, }) => {
    const componentClassName = useMemo(() => {
        const classModifiers = [classModifier];
        if (isVertical) {
            classModifiers.push("vertical");
        }
        return getComponentClassName("af-content-item-duo", className, classModifiers.filter(Boolean).join(" "));
    }, [classModifier, className, isVertical]);
    return (_jsxs("div", { className: componentClassName, children: [_jsx("p", { className: "af-content-item-duo__label", children: label }), typeof value === "string" ? (_jsx("p", { className: "af-content-item-duo__value", children: value })) : (_jsx("div", { className: "af-content-item-duo__value", children: value })), buttonText && (_jsx("div", { className: "af-content-item-duo__button", children: _jsx(ButtonComponent, { variant: "ghost", onClick: onButtonClick, children: buttonText }) }))] }));
};

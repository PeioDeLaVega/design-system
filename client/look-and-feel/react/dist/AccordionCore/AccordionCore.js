import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, } from "react";
import { getComponentClassName } from "../utilities";
export const AccordionCore = ({ summary, children, className, classModifier, summaryProps, isOpen, onClick, ...detailsProps }) => {
    const componentClassName = useMemo(() => getComponentClassName("af-accordion", className, classModifier), [classModifier, className]);
    const handleToggle = useCallback((event) => {
        if (onClick) {
            event.preventDefault();
            onClick(event);
        }
    }, [onClick]);
    return (_jsxs("details", { className: componentClassName, open: isOpen, ...detailsProps, children: [_jsx("summary", { className: "af-accordion__summary", onClick: handleToggle, role: "button", tabIndex: 0, ...summaryProps, children: summary }), _jsx("div", { className: "af-accordion__content", children: children })] }));
};

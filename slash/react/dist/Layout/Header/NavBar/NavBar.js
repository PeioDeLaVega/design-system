import { jsx as _jsx } from "react/jsx-runtime";
import React, { isValidElement, useCallback, useMemo, useState, } from "react";
import { getPosition } from "./NavBar.helpers";
import { NavBarBase } from "./NavBarBase";
const NavBar = ({ positionInit = 0, children, ...otherProps }) => {
    const [isMenuFocused, setIsMenuFocused] = useState(false);
    const [position, setPosition] = useState(positionInit);
    const validChildren = useMemo(() => (React.Children.map(children, (child) => isValidElement(child) && child) ?? []).filter((c) => Boolean(c)), [children]);
    const handleKeys = useCallback((key) => {
        if (key === "Escape") {
            setIsMenuFocused(false);
        }
        if (key === "ArrowRight" || key === "ArrowLeft") {
            const newPosition = getPosition(validChildren.length, position, key);
            setPosition(newPosition);
        }
    }, [position, validChildren]);
    return (_jsx(NavBarBase, { ...otherProps, onFocus: () => setIsMenuFocused(true), onBlur: () => setIsMenuFocused(false), handleKeys: handleKeys, isMenuFocused: isMenuFocused, children: React.Children.map(validChildren, (child, index) => {
            const isCurrent = index === position;
            return React.cloneElement(child, {
                key: `NavBarItem`,
                classModifier: [
                    child.props.classModifier,
                    isCurrent ? "active" : undefined,
                ]
                    .filter((c) => Boolean(c))
                    .join(" "),
                tabIndex: isCurrent ? 0 : -1,
                index,
                hasFocus: isMenuFocused && isCurrent,
                onClick: () => setPosition(index),
            });
        }) }));
};
export { NavBar };

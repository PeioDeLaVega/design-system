export const handleLinkFocus = (refToFocusOn, hasFocus, isMenuOpen) => {
    if (!refToFocusOn || isMenuOpen) {
        return;
    }
    if (hasFocus) {
        refToFocusOn.focus();
    }
    else {
        refToFocusOn.blur();
    }
};

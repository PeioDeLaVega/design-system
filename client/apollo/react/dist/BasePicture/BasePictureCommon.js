import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import logo from "@axa-fr/design-system-look-and-feel-css/logo-axa.svg";
import { getComponentClassName } from "../utilities/getComponentClassName";
export const BasePicture = ({ className, src, ...rest }) => {
    const componentClassName = useMemo(() => getComponentClassName("af-basepicture", className), [className]);
    return (_jsx("img", { className: componentClassName, alt: "", src: src || logo, ...rest }));
};

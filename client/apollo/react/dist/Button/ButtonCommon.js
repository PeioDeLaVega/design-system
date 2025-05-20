import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spinner } from "../Spinner/SpinnerCommon";
export const buttonVariants = {
    primary: "primary",
    "primary-business": "primary-business",
    "primary-inverse": "primary-inverse",
    secondary: "secondary",
    "secondary-inverse": "secondary-inverse",
    tertiary: "tertiary",
    ghost: "ghost",
};
export const Button = ({ children, className, variant = "primary", iconLeft, iconRight, disabled, loading, ...args }) => (_jsxs("button", { className: ["af-btn-client", `af-btn-client--${variant}`, className]
        .filter(Boolean)
        .join(" "), disabled: disabled || loading, type: "button", ...args, children: [iconLeft, children, iconRight, loading && _jsx(Spinner, { size: 24, variant: "gray" })] }));

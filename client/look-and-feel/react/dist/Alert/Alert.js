import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Alert/Alert.scss";
import checkCircleOutline from "@material-symbols/svg-400/outlined/check_circle.svg";
import errorIcon from "@material-symbols/svg-400/outlined/emergency_home.svg";
import errorOutline from "@material-symbols/svg-400/outlined/error.svg";
import infoIcon from "@material-symbols/svg-400/outlined/info.svg";
import wbIncandescentOutlined from "@material-symbols/svg-400/outlined/wb_incandescent.svg";
import { useMemo, } from "react";
import { Svg } from "../Svg";
export const alertTypes = {
    validation: "validation",
    error: "error",
    warning: "warning",
    information: "information",
    neutral: "neutral",
};
const getIconFromType = (type) => ({
    [alertTypes.validation]: checkCircleOutline,
    [alertTypes.error]: errorIcon,
    [alertTypes.neutral]: infoIcon,
    [alertTypes.warning]: errorOutline,
    [alertTypes.information]: wbIncandescentOutlined,
})[type] || wbIncandescentOutlined;
export const Alert = ({ type = alertTypes.information, title, children, action, iconSize = 24, heading: Heading = "h4", }) => {
    const icon = useMemo(() => getIconFromType(type), [type]);
    return (_jsxs("div", { className: `af-alert af-alert--${type}`, role: "alert", children: [_jsx(Svg, { src: icon, width: iconSize, height: iconSize, className: "af-alert__icon", "aria-hidden": true }), _jsxs("div", { className: "af-alert-client__content", children: [title && _jsx(Heading, { className: "af-alert__title", children: title }), children, action && _jsx("div", { className: "af-alert__action", children: action })] })] }));
};

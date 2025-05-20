import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Svg } from "../../../Svg/Svg";
const CheckboxCommon = ({ errorId, checkBoxIcon, hasError, ...inputProps }) => (_jsxs("span", { className: "af-checkbox", children: [_jsx("input", { ...inputProps, type: "checkbox", "aria-errormessage": errorId, "aria-invalid": hasError, disabled: false }), _jsx("span", { className: "af-checkbox__icons", children: _jsx(Svg, { src: checkBoxIcon, className: "af-checkbox__checked", "aria-hidden": true }) })] }));
CheckboxCommon.displayName = "CheckboxCommon";
export { CheckboxCommon };

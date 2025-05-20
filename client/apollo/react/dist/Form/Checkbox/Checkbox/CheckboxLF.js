import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/Checkbox/CheckboxLF.scss";
import checkBoxIcon from "@material-symbols/svg-400/outlined/check.svg";
import { CheckboxCommon } from "./CheckboxCommon";
export const Checkbox = (props) => (_jsx(CheckboxCommon, { ...props, checkBoxIcon: checkBoxIcon }));
Checkbox.displayName = "Checkbox";

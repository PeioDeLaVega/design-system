import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxCard/CheckboxCardLF.scss";
import { Icon } from "../../../Icon/IconLF";
import { Checkbox } from "../Checkbox/CheckboxLF";
import { CheckboxCardCommon } from "./CheckboxCardCommon";
export const CheckboxCard = (props) => (_jsx(CheckboxCardCommon, { ...props, IconComponent: Icon, CheckboxComponent: Checkbox }));
CheckboxCard.displayName = "CheckboxCard";

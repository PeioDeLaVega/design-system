import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxCard/CheckboxCardApollo.scss";
import { Icon } from "../../../Icon/IconApollo";
import { Checkbox } from "../Checkbox/CheckboxApollo";
import { CheckboxCardCommon } from "./CheckboxCardCommon";
export const CheckboxCard = (props) => (_jsx(CheckboxCardCommon, { ...props, IconComponent: Icon, CheckboxComponent: Checkbox }));
CheckboxCard.displayName = "CheckboxCard";

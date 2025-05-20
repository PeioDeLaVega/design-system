import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxText/CheckboxTextApollo.scss";
import { ItemMessage } from "../../ItemMessage/ItemMessageApollo";
import { Checkbox } from "../Checkbox/CheckboxApollo";
import { CheckboxTextCommon } from "./CheckboxTextCommon";
export const CheckboxText = (props) => (_jsx(CheckboxTextCommon, { ...props, CheckboxComponent: Checkbox, ItemMessageComponent: ItemMessage }));
CheckboxText.displayName = "CheckboxText";

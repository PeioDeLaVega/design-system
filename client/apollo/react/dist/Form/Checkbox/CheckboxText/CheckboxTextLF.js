import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/Checkbox/CheckboxText/CheckboxTextLF.scss";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";
import { Checkbox } from "../Checkbox/CheckboxLF";
import { CheckboxTextCommon } from "./CheckboxTextCommon";
export const CheckboxText = (props) => (_jsx(CheckboxTextCommon, { ...props, CheckboxComponent: Checkbox, ItemMessageComponent: ItemMessage }));
CheckboxText.displayName = "CheckboxText";

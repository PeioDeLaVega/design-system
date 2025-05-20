import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/DateInput/DateInputLF.scss";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { DateInput as DateInputCommon } from "./DateInputCommon";
export const DateInput = forwardRef((props, ref) => (_jsx(DateInputCommon, { ...props, ref: ref, ItemLabelComponent: ItemLabel, ItemMessageComponent: ItemMessage })));
DateInput.displayName = "DateInput";

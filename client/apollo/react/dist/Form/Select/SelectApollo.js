import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/Select/SelectApollo.scss";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { Select as SelectCommon } from "./SelectCommon";
export const Select = forwardRef((props, ref) => (_jsx(SelectCommon, { ...props, ref: ref, ItemLabelComponent: ItemLabel, ItemMessageComponent: ItemMessage })));
Select.displayName = "Select";

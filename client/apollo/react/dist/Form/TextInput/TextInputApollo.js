import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/TextInput/TextInputApollo.scss";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { TextInput as TextInputCommon } from "./TextInputCommon";
export const TextInput = forwardRef((props, ref) => (_jsx(TextInputCommon, { ...props, ref: ref, ItemLabelComponent: ItemLabel, ItemMessageComponent: ItemMessage })));
TextInput.displayName = "TextInput";

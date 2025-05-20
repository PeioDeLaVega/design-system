import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/TextInput/TextInputLF.scss";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { TextInput as TextInputCommon } from "./TextInputCommon";
export const TextInput = forwardRef((props, ref) => (_jsx(TextInputCommon, { ...props, ref: ref, ItemLabelComponent: ItemLabel, ItemMessageComponent: ItemMessage })));
TextInput.displayName = "TextInput";

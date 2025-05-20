import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/TextArea/TextAreaLF.scss";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { TextArea as TextAreaCommon } from "./TextAreaCommon";
export const TextArea = forwardRef((props, ref) => (_jsx(TextAreaCommon, { ...props, ref: ref, ItemLabelComponent: ItemLabel, ItemMessageComponent: ItemMessage })));
TextArea.displayName = "TextArea";

import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/TextArea/TextAreaApollo.scss";
import { forwardRef } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelApollo";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { TextArea as TextAreaCommon } from "./TextAreaCommon";
export const TextArea = forwardRef((props, ref) => (_jsx(TextAreaCommon, { ...props, ref: ref, ItemLabelComponent: ItemLabel, ItemMessageComponent: ItemMessage })));
TextArea.displayName = "TextArea";

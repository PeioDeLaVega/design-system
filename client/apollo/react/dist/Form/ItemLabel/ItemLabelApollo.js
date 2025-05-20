import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Form/ItemLabel/ItemLabelApollo.scss";
import { Button } from "../../Button/ButtonApollo";
import { ItemLabel as ItemLabelCommon } from "./ItemLabelCommon";
export const ItemLabel = (props) => _jsx(ItemLabelCommon, { ...props, ButtonComponent: Button });

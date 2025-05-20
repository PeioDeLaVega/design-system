import React, { ReactNode, type ComponentProps, type ComponentType } from "react";
import { ItemMessage } from "../../ItemMessage/ItemMessageCommon";
import { CheckboxProps } from "../Checkbox/CheckboxCommon";
type CheckboxComponent = {
    CheckboxComponent: ComponentType<CheckboxProps>;
};
type ItemMessageComponen = {
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
};
export type CheckboxTextProps = {
    label: string | ReactNode;
    errorMessage?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">;
export type CheckboxTextCommonProps = CheckboxTextProps & CheckboxComponent & ItemMessageComponen;
declare const CheckboxTextCommon: {
    ({ label, errorMessage, CheckboxComponent, ItemMessageComponent, ...inputProps }: CheckboxTextCommonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { CheckboxTextCommon };

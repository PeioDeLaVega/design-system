import "@axa-fr/design-system-slash-css/dist/Form/Date/Date.scss";
import { ComponentPropsWithRef } from "react";
type Props = Omit<ComponentPropsWithRef<"input">, "value"> & {
    classModifier?: string;
    defaultValue?: Date | string;
    value?: Date | string;
};
declare const Date: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { Date };

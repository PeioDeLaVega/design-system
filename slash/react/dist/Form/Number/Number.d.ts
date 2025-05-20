import "@axa-fr/design-system-slash-css/dist/Form/Text/Text.scss";
import { ComponentPropsWithRef } from "react";
type Props = Omit<ComponentPropsWithRef<"input">, "type"> & {
    classModifier?: string;
};
declare const Number: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { Number };

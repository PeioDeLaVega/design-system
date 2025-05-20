import "@axa-fr/design-system-slash-css/dist/Form/Text/Text.scss";
import { ComponentPropsWithRef } from "react";
type Props = ComponentPropsWithRef<"input"> & {
    classModifier?: string;
};
declare const Text: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { Text };

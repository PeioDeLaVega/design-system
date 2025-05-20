import { ComponentPropsWithRef } from "react";
import "@axa-fr/design-system-slash-css/dist/Form/Pass/Pass.scss";
type Props = Omit<ComponentPropsWithRef<"input">, "type" | "role"> & {
    type?: "text" | "password";
    classModifier?: string;
    onToggleType: () => void;
};
declare const Pass: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { Pass };

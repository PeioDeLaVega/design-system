import "@axa-fr/design-system-slash-css/dist/common/grid.scss";
import "@axa-fr/design-system-slash-css/dist/common/reboot.scss";
import "@axa-fr/design-system-slash-css/dist/Form/core/FormCore.scss";
import { ComponentProps, ReactNode } from "react";
import { LegacyField } from "../core";
import { Textarea } from "./Textarea";
type Props = ComponentProps<typeof LegacyField> & ComponentProps<typeof Textarea> & {
    helpMessage?: ReactNode;
};
declare const TextareaInput: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLTextAreaElement>>;
export { TextareaInput };

import "@axa-fr/design-system-slash-css/dist/Form/Choice/Choice.scss";
import { type ComponentProps } from "react";
import { Radio } from "../Radio";
import type { Option } from "../core";
type Props = Omit<ComponentProps<typeof Radio>, "options"> & {
    id: string;
    options?: Array<Omit<Option, "value"> & {
        value: boolean;
    }>;
};
declare const Choice: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { Choice };

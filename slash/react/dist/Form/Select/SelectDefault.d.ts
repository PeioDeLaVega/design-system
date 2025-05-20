import { ComponentPropsWithRef } from "react";
import { SelectBase } from "./SelectBase";
type Props = Omit<ComponentPropsWithRef<typeof SelectBase> & {
    forceDisplayPlaceholder?: boolean;
    placeholder?: string;
    children: React.ReactNode;
}, "options">;
declare const SelectDefault: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLSelectElement>>;
export { SelectDefault };

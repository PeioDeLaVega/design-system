import { type ReactNode } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Modal/Modal.scss";
export type ModalCoreProps = React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> & {
    className?: string;
    title: string;
    onOutsideTap: (event: React.MouseEvent | React.KeyboardEvent) => void;
    children: ReactNode;
    ref?: React.Ref<HTMLDialogElement>;
};
declare const ModalCore: import("react").ForwardRefExoticComponent<Omit<ModalCoreProps, "ref"> & import("react").RefAttributes<HTMLDialogElement>>;
export { ModalCore };

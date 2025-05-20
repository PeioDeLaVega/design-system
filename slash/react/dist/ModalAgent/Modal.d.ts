import { type ReactNode } from "react";
export type ModalProps = React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> & {
    className?: string;
    title?: string;
    onOutsideTap: (event: React.MouseEvent | React.KeyboardEvent) => void;
    children: ReactNode;
    classModifier?: string;
    ref?: React.Ref<HTMLDialogElement>;
};
declare const Modal: import("react").ForwardRefExoticComponent<Omit<ModalProps, "ref"> & import("react").RefAttributes<HTMLDialogElement>>;
export { Modal };

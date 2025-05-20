import React from "react";
import { type ModalCoreProps } from "./ModalCore";
import { type ModalCoreHeaderProps } from "./components/ModalCoreHeader";
export type ModalProps = Omit<ModalCoreProps, "onOutsideTap" | "title"> & ModalCoreHeaderProps & {
    onSubmit?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    submitTitle?: string;
    cancelTitle?: string;
    submitDisabled?: boolean;
    cancelDisabled?: boolean;
};
declare const Modal: React.ForwardRefExoticComponent<Omit<ModalProps, "ref"> & React.RefAttributes<HTMLDialogElement>>;
export { Modal };

import React, { type ReactNode, type Ref } from "react";
import { type HeaderProps } from "./components/Header";
export type BooleanModalProps = React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> & HeaderProps & {
    onSubmit: (event: React.MouseEvent | React.KeyboardEvent) => void;
    onCancel: (event: React.MouseEvent | React.KeyboardEvent) => void;
    id: string;
    children: ReactNode;
    submitTitle?: string;
    cancelTitle?: string;
    className?: string;
    classModifier?: string;
    ref?: Ref<HTMLDialogElement>;
};
declare const BooleanModal: React.ForwardRefExoticComponent<Omit<BooleanModalProps, "ref"> & React.RefAttributes<HTMLDialogElement>>;
export { BooleanModal };

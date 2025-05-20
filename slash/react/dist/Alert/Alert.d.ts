import { MouseEventHandler, PropsWithChildren } from "react";
import "@axa-fr/design-system-slash-css/dist/Alert/Alert.scss";
export declare enum TypeIcons {
    error = "glyphicon glyphicon-minus-sign",
    danger = "glyphicon glyphicon-alert",
    info = "glyphicon glyphicon-info-sign",
    success = "glyphicon glyphicon-ok"
}
export type AlertCoreComponentProps = {
    title: string;
    icon?: string;
    onClose?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    classModifier?: "error" | "danger" | "info" | "success";
    ariaLabel?: string;
};
export declare const Alert: ({ className, onClose, icon, title, children, classModifier, ariaLabel, }: PropsWithChildren<AlertCoreComponentProps>) => import("react/jsx-runtime").JSX.Element;

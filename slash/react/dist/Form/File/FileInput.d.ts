import "@axa-fr/design-system-slash-css/dist/Form/File/File.scss";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { LegacyField } from "../core";
import { File } from "./File";
import { FileTable } from "./FileTable";
type FieldProps = ComponentPropsWithoutRef<typeof LegacyField>;
type FileProps = ComponentPropsWithoutRef<typeof File>;
type FileTableProps = ComponentPropsWithoutRef<typeof FileTable>;
type Props = FieldProps & FileProps & Pick<FileTableProps, "values" | "errors"> & {
    fileLabel?: string;
    helpMessage?: ReactNode;
};
declare const FileInput: ({ values, name, onChange, classModifier, message, children, helpMessage, id, forceDisplayMessage, messageType, classNameContainerLabel, classNameContainerInput, label, isVisible, className, errors, fileLabel, disabled, required, ...otherFileProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { FileInput };

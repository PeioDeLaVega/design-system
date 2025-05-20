import { ComponentPropsWithoutRef } from "react";
import { FileRejection } from "react-dropzone";
import { FileLine } from "./FileLine";
import { CustomFile } from "./File";
type FileLineProps = ComponentPropsWithoutRef<typeof FileLine>;
type Props = Pick<FileLineProps, "onClick"> & {
    errors?: FileRejection[];
    values?: CustomFile[];
    className?: string;
    classModifier?: string;
    disabled?: boolean;
};
declare const FileTable: ({ errors, values, className, classModifier, disabled, onClick, }: Props) => import("react/jsx-runtime").JSX.Element;
export { FileTable };

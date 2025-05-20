import { DropzoneInputProps, DropzoneOptions, FileRejection } from "react-dropzone";
import { FileActions } from "./constants";
type Dropzone = DropzoneInputProps & DropzoneOptions;
type Props = Omit<Dropzone, "onDrop" | "onChange"> & {
    classModifier?: string;
    label?: string;
    icon?: string;
    onChange: (data: onChangeProps) => void;
};
export type FilePreview = File & {
    preview: string;
};
export type CustomFile<T = FilePreview> = {
    id: string;
    file: T;
};
type onChangeProps = {
    id?: string;
    name?: string;
    fileAction?: FileActions;
    values: CustomFile[];
    errors?: CustomFile<FileRejection>[];
};
declare const File: ({ className, classModifier, id, name, disabled, onChange, multiple, maxSize, minSize, accept, readOnly, placeholder, label, icon, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { File };

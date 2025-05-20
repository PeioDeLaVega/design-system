import "@axa-fr/design-system-look-and-feel-css/dist/Form/FileUpload/FileUpload.scss";
import { ComponentPropsWithRef } from "react";
type Props = Omit<ComponentPropsWithRef<"input">, "required"> & {
    id: string;
    label?: string;
    buttonLabel?: string;
    dropzoneDescription?: string;
    instructions?: string;
    filesListLabel?: string;
    required?: boolean;
    globalError?: string;
    errors?: Array<{
        id?: string | undefined;
        message: string;
    }>;
    files?: Array<{
        id: string;
        name: string;
        size: number;
        isLoading: boolean;
    }>;
    accept?: string;
    isMobile?: boolean;
    withPadding?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
    onView?: (id: string) => void;
    onDelete?: (id: string) => void;
};
declare const FileUpload: {
    ({ id, label, buttonLabel, instructions, dropzoneDescription, filesListLabel, required, files, errors, globalError, isMobile, withPadding, onView, onDelete, ...otherProps }: Props): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { FileUpload };

import { CustomFile } from "./File";
type Props = CustomFile & {
    onClick: (id: string) => void;
    className?: string;
    classModifier?: string;
    disabled?: boolean;
};
declare const FileLine: ({ className, classModifier, file, disabled, id, onClick, }: Props) => import("react/jsx-runtime").JSX.Element;
export { FileLine };

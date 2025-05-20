import { GroupBase } from "react-select";
import { AsyncProps } from "react-select/async";
type Option = {
    value: string;
    label: string;
};
type Props = Omit<AsyncProps<Option, true, GroupBase<Option>>, "value" | "isDisabled" | "onChange"> & {
    onChange?: (data: onChangeProps) => void;
    values?: string[] | null;
    value?: string;
    disabled?: boolean;
};
type onChangeProps = {
    id: string;
    name: string;
    values?: string[];
    value?: string;
};
declare const MultiSelect: ({ id, name, loadOptions, values, options, value, onChange, onBlur, placeholder, className, disabled, loadingMessage, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { MultiSelect };

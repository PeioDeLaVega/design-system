import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/Choice/Choice.scss";
import { forwardRef } from "react";
import { Radio } from "../Radio";
const defaultOptions = [
    { label: "Oui", value: true, id: "radioItemTrue" },
    { label: "Non", value: false, id: "radioItemFalse" },
];
const Choice = forwardRef(({ children, value, options = defaultOptions, ...otherProps }, inputRef) => {
    const choiceOptions = options.map((option) => ({
        ...option,
        value: `${option.value}`,
    }));
    return (_jsx(Radio, { ...otherProps, ref: inputRef, value: value?.toString(), options: choiceOptions, children: children }));
});
Choice.displayName = "Choice";
export { Choice };

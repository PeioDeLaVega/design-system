import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { Field } from "../core";
import { Text } from "./Text";
import { useAriaInvalid } from "../core/useAriaInvalid";
const TextInput = forwardRef(({ children, message, forceDisplayMessage, messageType, ...props }, inputRef) => {
    const errorUseId = useId();
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsx(Field, { ...props, renderInput: ({ id, classModifier }) => (_jsx(Text, { id: id, classModifier: classModifier, ref: inputRef, "aria-describedby": errorUseId, "aria-invalid": isInvalid, ...props })), errorId: errorUseId, forceDisplayMessage: forceDisplayMessage, message: message, children: children }));
});
TextInput.displayName = "TextInput";
export { TextInput };

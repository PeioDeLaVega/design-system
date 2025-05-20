import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/Text/Text.scss";
import { forwardRef } from "react";
import { getComponentClassName } from "../../utilities";
const Text = forwardRef(({ className, classModifier, required, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-form__input-text");
    return (_jsx("input", { className: componentClassName, type: "text", ref: inputRef, required: required || classModifier?.includes("required"), ...otherProps }));
});
Text.displayName = "Text";
export { Text };

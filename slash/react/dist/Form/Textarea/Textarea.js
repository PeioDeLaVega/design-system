import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/Textarea/Textarea.scss";
import { forwardRef, useId } from "react";
import { getComponentClassName } from "../../utilities";
const Textarea = forwardRef(({ id, className, classModifier, ...otherProps }, inputRef) => {
    const inputUseId = useId();
    const inputId = id ?? inputUseId;
    const componentClassName = getComponentClassName(className, classModifier, "af-form__input-textarea");
    return (_jsx("textarea", { ...otherProps, id: inputId, className: componentClassName, ref: inputRef, required: classModifier?.includes("required") }));
});
Textarea.displayName = "Textarea";
export { Textarea };

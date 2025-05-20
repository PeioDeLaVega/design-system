import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/Text/Text.scss";
import { forwardRef, useId } from "react";
import { getComponentClassName } from "../../utilities";
const Number = forwardRef(({ id, className, classModifier, required, ...otherProps }, inputRef) => {
    const inputUseId = useId();
    const inputId = id ?? inputUseId;
    const componentClassName = getComponentClassName(className, classModifier, "af-form__input-text");
    return (_jsx("input", { className: componentClassName, id: inputId, type: "number", ref: inputRef, required: required || classModifier?.includes("required"), ...otherProps }));
});
Number.displayName = "Number";
export { Number };

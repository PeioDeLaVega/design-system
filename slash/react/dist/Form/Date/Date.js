import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/Date/Date.scss";
import { forwardRef } from "react";
import { getComponentClassName } from "../../utilities";
import { formatDateInputValue } from "../../utilities/helpers/date";
const Date = forwardRef(({ className, classModifier, defaultValue, value, ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-form__input-date");
    return (_jsx("input", { className: componentClassName, type: "date", defaultValue: formatDateInputValue(defaultValue), value: formatDateInputValue(value), ref: ref, disabled: classModifier?.includes("disabled"), required: classModifier?.includes("required"), ...otherProps }));
});
Date.displayName = "Date";
export { Date };

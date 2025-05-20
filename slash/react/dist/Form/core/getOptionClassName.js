import { getComponentClassName } from "../../utilities";
export function getOptionClassName(className, classModifier, defaultClassName, disabled) {
    const classModifierWithDisabled = [
        classModifier,
        disabled ? "disabled" : undefined,
    ]
        .filter(Boolean)
        .join(" ");
    return getComponentClassName(className, classModifierWithDisabled, defaultClassName);
}

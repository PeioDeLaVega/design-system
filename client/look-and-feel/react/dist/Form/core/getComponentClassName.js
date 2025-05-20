import classNames from "classnames";
const getLastClassName = (classNameToUse) => {
    if (!classNameToUse) {
        return null;
    }
    return classNameToUse.split(" ").filter(Boolean).at(-1);
};
const listClassModifier = (classModifier) => {
    if (!classModifier) {
        return [];
    }
    return classModifier.split(" ");
};
export const getComponentClassName = (className, classModifier, defaultClassName) => {
    const classNameToUse = className || defaultClassName;
    if (!classNameToUse) {
        return "";
    }
    const classWithoutModifier = getLastClassName(classNameToUse);
    const modifiers = listClassModifier(classModifier);
    const modifiersObject = modifiers
        .filter((it) => /\S/.test(it))
        .map((it) => {
        return `${classWithoutModifier}--${it}`;
    });
    return classNames(classNameToUse, modifiersObject);
};

import classNames from "classnames";
const getLastClassName = (defaultClassName) => {
    if (!defaultClassName) {
        return null;
    }
    return defaultClassName.split(" ").filter(Boolean).at(-1);
};
const listClassModifier = (classModifier) => {
    if (!classModifier) {
        return [];
    }
    return classModifier.split(" ");
};
export const getComponentClassName = (defaultClassName, className, classModifier) => {
    if (!defaultClassName) {
        return "";
    }
    const classWithoutModifier = getLastClassName(defaultClassName);
    const modifiers = listClassModifier(classModifier);
    const modifiersObject = modifiers
        .filter((it) => /\S/.test(it))
        .map((it) => {
        return `${classWithoutModifier}--${it}`;
    });
    return classNames(defaultClassName, className, modifiersObject);
};

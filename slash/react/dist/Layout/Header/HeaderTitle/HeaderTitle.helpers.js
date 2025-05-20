export const getClassModifier = (classModifier, isSticky) => {
    if (isSticky) {
        return !classModifier ? "sticky" : `${classModifier} sticky`.trim();
    }
    return classModifier;
};

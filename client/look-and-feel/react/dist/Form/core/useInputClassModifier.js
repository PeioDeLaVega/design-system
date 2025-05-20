export function useInputClassModifier(classModifier, disabled, hasChildren) {
    return {
        inputClassModifier: [
            classModifier ?? "",
            hasChildren ? "hasinfobulle" : "",
        ].join(" "),
        inputFieldClassModifier: [
            classModifier ?? "",
            disabled ? "disabled" : "",
        ].join(" "),
    };
}

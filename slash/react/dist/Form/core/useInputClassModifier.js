export function useInputClassModifier(classModifier, disabled, hasChildren, required = false) {
    return {
        inputClassModifier: [
            classModifier ?? "",
            hasChildren ? "hasinfobulle" : "",
        ].join(" "),
        inputFieldClassModifier: [
            classModifier ?? "",
            disabled ? "disabled" : "",
            required ? "required" : "",
        ].join(" "),
    };
}

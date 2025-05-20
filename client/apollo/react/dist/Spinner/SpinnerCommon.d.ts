export declare const spinnerVariants: {
    readonly blue: "blue";
    readonly gray: "gray";
    readonly white: "white";
};
export type SpinnerVariants = keyof typeof spinnerVariants;
type SpinnerProps = {
    size?: 24 | 32 | 40;
    variant?: SpinnerVariants;
    text?: string;
};
declare const Spinner: {
    ({ size, variant, text, }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Spinner };

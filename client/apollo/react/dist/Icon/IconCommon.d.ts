import { ComponentProps } from "react";
import { Svg } from "../Svg/Svg";
export declare const iconVariants: {
    readonly primary: "primary";
    readonly secondary: "secondary";
    readonly disabled: "disabled";
};
export type IconVariants = keyof typeof iconVariants;
export declare const iconSizeVariants: {
    readonly L: "large";
    readonly M: "medium";
    readonly S: "small";
    readonly XS: "extra-small";
};
export type IconSizeVariants = keyof typeof iconSizeVariants;
export type IconProps = ComponentProps<typeof Svg> & {
    variant?: IconVariants;
    size?: IconSizeVariants;
    hasBackground?: boolean;
};
export declare const Icon: ({ variant, size, hasBackground, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;

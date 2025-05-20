import { type SVGAttributes } from "react";
type SvgProps = SVGAttributes<SVGSVGElement> & {
    src: string;
    alt?: string;
};
export declare const Svg: ({ src, alt, width, height, ...props }: SvgProps) => import("react/jsx-runtime").JSX.Element | null;
export {};

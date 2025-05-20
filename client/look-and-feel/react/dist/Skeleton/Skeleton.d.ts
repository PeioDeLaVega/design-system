import "@axa-fr/design-system-look-and-feel-css/dist/Skeleton/Skeleton.scss";
import { ReactNode } from "react";
type isLoadingAndChildrenProps = {
    children: ReactNode;
    isLoading: boolean;
} | {
    children?: undefined;
    isLoading?: boolean;
};
export type SkeletonProps = {
    className?: string;
    grid: number[][];
    ariaBusy?: boolean;
    ariaLabel?: string;
    maxCols?: number;
    colGap?: number;
    rowGap?: number;
} & isLoadingAndChildrenProps;
export declare const Skeleton: ({ className, grid, ariaBusy, ariaLabel, maxCols, colGap, rowGap, isLoading, children, }: SkeletonProps) => string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
export {};

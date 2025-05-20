import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { Skeleton, List } from "..";
export type SkeletonListProps = {
    lists: {
        lines?: number;
        grid: ComponentPropsWithRef<typeof Skeleton>["grid"];
    }[];
    classModifierList?: ComponentPropsWithRef<typeof List>["classModifier"];
    isLoading: boolean;
} & PropsWithChildren;
export declare const SkeletonList: ({ children, isLoading, lists, classModifierList, }: SkeletonListProps) => string | number | bigint | boolean | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element[] | null | undefined;

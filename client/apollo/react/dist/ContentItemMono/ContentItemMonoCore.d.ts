export type ContentMonoItemSize = "medium" | "large";
export type ContentItemCoreProps = {
    size?: ContentMonoItemSize;
    title?: string;
    primarySubtitle?: string;
    subtitle?: string;
    leftComponent?: React.ReactNode;
};
export declare const ContentItemMonoCore: ({ size, leftComponent, title, primarySubtitle, subtitle, }: ContentItemCoreProps) => import("react/jsx-runtime").JSX.Element;

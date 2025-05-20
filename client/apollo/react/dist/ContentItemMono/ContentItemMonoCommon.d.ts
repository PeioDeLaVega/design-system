import { ComponentProps, ComponentType } from "react";
import { Icon } from "../Icon/IconCommon";
import { BasePicture } from "../BasePicture/BasePictureCommon";
import { ContentItemCoreProps } from "./ContentItemMonoCore";
export type ContentMonoItemSize = "medium" | "large";
export type ContentMonoItemPictureProps = {
    type: "picture";
    size?: ContentMonoItemSize;
    picture: string;
    title: string;
    subtitle: string;
};
export type ContentMonoItemIconProps = {
    type: "icon";
    icon: string;
    title: string;
    subtitle1?: string;
    subtitle2?: string;
};
export type ContentMonoItemStickProps = {
    type: "stick";
    title: string;
    subtitle?: string;
};
export type ContentItemProps = ContentMonoItemPictureProps | ContentMonoItemIconProps | ContentMonoItemStickProps;
export type ContentItemCommonProps = ContentItemProps & {
    IconComponent: ComponentType<ComponentProps<typeof Icon>>;
    BasePictureComponent: ComponentType<ComponentProps<typeof BasePicture>>;
};
export declare const getContentItemCoreProps: ({ IconComponent, BasePictureComponent, type, ...props }: ContentItemCommonProps) => ContentItemCoreProps;
export declare const ContentItemMonoCommon: (props: ContentItemCommonProps) => import("react/jsx-runtime").JSX.Element;

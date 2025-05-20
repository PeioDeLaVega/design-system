import React, { type ReactNode } from "react";
import { IconProps } from "../Icon/IconCommon";
import { TagProps } from "../Tag/TagCommon";
import { HeadingLevel } from "./types";
export type HeadingCommonProps = React.PropsWithChildren<{
    level?: HeadingLevel;
    icon?: string;
    iconProps?: Omit<IconProps, "src">;
    tag?: React.ReactNode;
    firstSubtitle?: ReactNode;
    secondSubtitle?: ReactNode;
    className?: string;
}>;
export declare const DEFAULT_TAG_PROPS: TagProps;
export declare const HeadingCommon: ({ children: title, className, firstSubtitle, secondSubtitle, level, icon, iconProps, tag, }: HeadingCommonProps) => import("react/jsx-runtime").JSX.Element;

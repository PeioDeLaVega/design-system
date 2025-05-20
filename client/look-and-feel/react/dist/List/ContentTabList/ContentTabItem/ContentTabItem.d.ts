import type { TContentTabItem } from "./types";
type TContentTabItemProps = TContentTabItem & {
    isMobile?: boolean;
};
export declare const ContentTabItem: ({ title, subtitle, tag, tagProps, date, actions, value, isMobile, }: TContentTabItemProps) => import("react/jsx-runtime").JSX.Element;
export {};

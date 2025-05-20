import "@axa-fr/design-system-look-and-feel-css/dist/Tabs/Tabs.scss";
import { ReactNode } from "react";
export declare enum Direction {
    center = "center"
}
type TabsProps = {
    items: {
        title: string;
        content: string | ReactNode;
        icon?: ReactNode;
    }[];
    preSelectedTabIndex?: number;
    direction?: Direction;
};
export declare const TabsClient: ({ items, preSelectedTabIndex, direction, }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export {};

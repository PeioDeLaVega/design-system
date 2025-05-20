import "@axa-fr/design-system-look-and-feel-css/dist/List/ContentTabList/ContentTabList.scss";
import { type TContentTabItem } from "./ContentTabItem";
type ContentTabListProps = {
    items: TContentTabItem[];
    classModifier?: string;
};
export declare const ContentTabList: ({ items, classModifier, }: ContentTabListProps) => import("react/jsx-runtime").JSX.Element;
export {};

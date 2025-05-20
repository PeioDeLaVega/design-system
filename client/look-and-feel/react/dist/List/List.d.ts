import { type ComponentProps } from "react";
import { Card } from "..";
import "@axa-fr/design-system-look-and-feel-css/dist/List/List.scss";
type TList = ComponentProps<typeof Card>;
export declare const List: ({ children, classModifier, ...cardProps }: TList) => import("react/jsx-runtime").JSX.Element;
export {};

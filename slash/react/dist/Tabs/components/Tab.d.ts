import "@axa-fr/design-system-slash-css/dist/Tabs/Tabs.scss";
import { ReactNode } from "react";
export type TabProps = {
    title: ReactNode;
    children?: ReactNode;
    className?: string;
    classModifier?: string;
};
declare const Tab: () => import("react/jsx-runtime").JSX.Element;
export { Tab };

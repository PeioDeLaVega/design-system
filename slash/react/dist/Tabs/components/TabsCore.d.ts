import React from "react";
import { TabsStatelessProps } from "./TabsStateless";
type Tabs = {
    onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    activeIndex?: string;
};
export type TabsCoreProps = Tabs & Omit<TabsStatelessProps, "activeIndex">;
export declare const onChangeEvent: (onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void) => (setState: (newValue: string) => void) => (event: React.MouseEvent<HTMLButtonElement>, index: string) => void;
declare const TabsCore: React.FunctionComponent<TabsCoreProps>;
export { TabsCore };

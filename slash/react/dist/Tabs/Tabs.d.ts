import React from "react";
import { TabProps } from "./components/Tab";
import { TabsCoreProps } from "./components/TabsCore";
type TTabs = React.ComponentType<TabsCoreProps> & {
    Tab: React.ComponentType<TabProps>;
};
declare const Tabs: TTabs;
export { Tabs };

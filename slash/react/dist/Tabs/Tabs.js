import { jsx as _jsx } from "react/jsx-runtime";
import { Tab } from "./components/Tab";
import { TabsCore } from "./components/TabsCore";
const Tabs = (props) => _jsx(TabsCore, { ...props });
Tabs.Tab = Tab;
export { Tabs };

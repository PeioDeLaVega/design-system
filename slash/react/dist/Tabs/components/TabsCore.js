import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { TabsStateless } from "./TabsStateless";
const DEFAULT_ACTIVE_INDEX = "0";
export const onChangeEvent = (onChange) => (setState) => (event, index) => {
    if (onChange) {
        onChange(event);
    }
    if (index) {
        setState(index);
    }
};
const TabsCore = ({ activeIndex = DEFAULT_ACTIVE_INDEX, onChange, ...otherProps }) => {
    const [stateActiveIndex, setActiveIndex] = useState(activeIndex);
    return (_jsx(TabsStateless, { activeIndex: stateActiveIndex, ...otherProps, onChange: onChangeEvent(onChange)(setActiveIndex) }));
};
export { TabsCore };

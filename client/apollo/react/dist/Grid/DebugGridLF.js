import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.scss";
import { useState } from "react";
import { CheckboxCard } from "../Form/Checkbox/CheckboxCard/CheckboxCardLF";
import { DebugGridCommon } from "./DebugGridCommon";
export const DebugGrid = ({ cols = 12, isCheckedByDefault = false, }) => {
    const [checked, setChecked] = useState(isCheckedByDefault);
    const handleChecked = () => setChecked(!checked);
    return (_jsxs(_Fragment, { children: [_jsx(CheckboxCard, { type: "horizontal", options: [
                    {
                        name: "debuggrid",
                        label: "Grid",
                        checked,
                        onClick: handleChecked,
                    },
                ] }), _jsx(DebugGridCommon, { cols: cols })] }));
};

import { jsx as _jsx } from "react/jsx-runtime";
const MAX_STEPPER_PROGRESS = 100;
export const ProgressBar = ({ value = MAX_STEPPER_PROGRESS, active = true, }) => {
    const clampedValue = Math.max(0, Math.min(value, MAX_STEPPER_PROGRESS));
    return (_jsx("div", { role: "progressbar", className: "af-progressbar", "aria-valuemin": 0, "aria-valuemax": MAX_STEPPER_PROGRESS, "aria-valuenow": clampedValue, "aria-current": active, "aria-hidden": !active, "aria-label": `Progression : ${clampedValue}%`, children: _jsx("div", { className: "af-progressbar__progress", style: { width: `${clampedValue}%` } }) }));
};

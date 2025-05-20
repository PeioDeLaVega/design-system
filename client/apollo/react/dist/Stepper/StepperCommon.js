import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { ItemMessage } from "../Form/ItemMessage/ItemMessageCommon";
export const Stepper = ({ currentStepProgress, currentTitle, nbSteps, currentStep, currentSubtitle, className, ProgressBarGroupComponent, helper, message, ...props }) => {
    const stepperId = useId();
    return (_jsxs("div", { className: "af-stepper", ...props, children: [_jsxs("div", { className: "af-stepper__header", children: [_jsx("h2", { className: "af-stepper__title", "aria-describedby": stepperId, children: currentTitle }), Boolean(currentSubtitle) && (_jsx("p", { className: "af-stepper__subtitle", children: currentSubtitle }))] }), _jsx(ProgressBarGroupComponent, { label: currentTitle, className: className, currentStep: currentStep, nbSteps: nbSteps, currentStepProgress: currentStepProgress }), Boolean(helper) && _jsx("span", { className: "af-stepper__helper", children: helper }), _jsx(ItemMessage, { message: message, messageType: "success" })] }));
};

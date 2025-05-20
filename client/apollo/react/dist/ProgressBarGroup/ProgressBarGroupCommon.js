import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { useId } from "react";
const INITIAL_STEPPER_PROGRESS = 10;
const MAX_STEPPER_PROGRESS = 100;
export const ProgressBarGroup = ({ currentStepProgress = INITIAL_STEPPER_PROGRESS, nbSteps = 4, currentStep, label, className, ProgressBarComponent, }) => {
    const stepperId = useId();
    const getCurrentProgress = (index) => {
        if (index < currentStep) {
            return MAX_STEPPER_PROGRESS;
        }
        if (index === currentStep) {
            return currentStepProgress || INITIAL_STEPPER_PROGRESS;
        }
        return 0;
    };
    return (_jsx("div", { id: stepperId, role: "group", "aria-label": label, className: classNames("af-progress-bar-group", className), children: [...Array(nbSteps).keys()].map((index) => (_jsx(ProgressBarComponent, { value: getCurrentProgress(index), active: index === currentStep }, `${stepperId}-${index}`))) }));
};

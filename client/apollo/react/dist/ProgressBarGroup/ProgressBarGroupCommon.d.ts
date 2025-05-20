import { type ComponentProps, type ComponentType } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBarCommon";
export type ProgressBarGroupProps = {
    currentStepProgress?: number;
    currentStep: number;
    nbSteps?: 3 | 4 | 5 | 6 | 7 | 8;
    label?: string;
    className?: string;
    ProgressBarComponent: ComponentType<ComponentProps<typeof ProgressBar>>;
};
export declare const ProgressBarGroup: ({ currentStepProgress, nbSteps, currentStep, label, className, ProgressBarComponent, }: ProgressBarGroupProps) => import("react/jsx-runtime").JSX.Element;

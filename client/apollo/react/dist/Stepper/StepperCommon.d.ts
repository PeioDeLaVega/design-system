import { ComponentType, HTMLAttributes } from "react";
import { ProgressBarGroupProps } from "../ProgressBarGroup/ProgressBarGroupCommon";
export type StepperProps = {
    currentStepProgress?: number;
    currentStep: number;
    currentSubtitle?: string;
    currentTitle?: string;
    nbSteps?: 3 | 4 | 5 | 6 | 7 | 8;
    helper?: string;
    message?: string;
    ProgressBarGroupComponent: ComponentType<Omit<ProgressBarGroupProps, "ProgressBarComponent">>;
} & Omit<HTMLAttributes<HTMLDivElement>, "role">;
export declare const Stepper: ({ currentStepProgress, currentTitle, nbSteps, currentStep, currentSubtitle, className, ProgressBarGroupComponent, helper, message, ...props }: StepperProps) => import("react/jsx-runtime").JSX.Element;

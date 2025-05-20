import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Stepper/StepperLF.scss";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupLF";
import { Stepper as StepperCommon } from "./StepperCommon";
export const Stepper = (props) => _jsx(StepperCommon, { ...props, ProgressBarGroupComponent: ProgressBarGroup });

import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Stepper/StepperApollo.scss";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupApollo";
import { Stepper as StepperCommon } from "./StepperCommon";
export const Stepper = (props) => _jsx(StepperCommon, { ...props, ProgressBarGroupComponent: ProgressBarGroup });

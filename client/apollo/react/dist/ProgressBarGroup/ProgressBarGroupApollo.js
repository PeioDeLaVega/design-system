import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/ProgressBarGroup/ProgressBarGroupApollo.scss";
import { ProgressBar } from "../ProgressBar/ProgressBarApollo";
import { ProgressBarGroup as ProgressBarGroupCommon, } from "./ProgressBarGroupCommon";
export const ProgressBarGroup = (props) => _jsx(ProgressBarGroupCommon, { ...props, ProgressBarComponent: ProgressBar });

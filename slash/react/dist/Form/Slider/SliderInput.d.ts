import { type ComponentProps, type ReactNode } from "react";
import { LegacyField } from "../core";
import { Slider } from "./Slider";
type Props = ComponentProps<typeof LegacyField> & ComponentProps<typeof Slider> & {
    helpMessage?: ReactNode;
};
declare const SliderInput: ({ id, children, helpMessage, message, classNameContainerLabel, classNameContainerInput, label, messageType, isVisible, forceDisplayMessage, className, classModifier, ...sliderProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { SliderInput };

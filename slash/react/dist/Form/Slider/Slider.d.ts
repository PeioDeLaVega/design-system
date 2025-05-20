import RcSlider from "rc-slider";
import { type ComponentProps, type ReactNode } from "react";
type RcSliderProps = ComponentProps<typeof RcSlider>;
type Props = Omit<RcSliderProps, "marks" | "onChange" | "onChangeComplete"> & {
    classModifier?: string;
    options: {
        value: number;
        label?: string | ReactNode;
    }[];
    id: string;
    name: string;
    onChange?: (selectedValue: {
        id: string;
        name: string;
        value: number;
    }) => void;
    onChangeComplete?: (selectedValue: {
        id: string;
        name: string;
        value: number;
    }) => void;
};
declare const Slider: ({ options, value, defaultValue, className, classModifier, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { Slider };

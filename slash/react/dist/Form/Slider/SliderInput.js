import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useMemo } from "react";
import { HelpMessage, LegacyField } from "../core";
import { Slider } from "./Slider";
const SliderInput = ({ id, children, helpMessage, message, classNameContainerLabel, classNameContainerInput, label, messageType, isVisible, forceDisplayMessage, className, classModifier, ...sliderProps }) => {
    const generatedId = useId();
    const newId = useMemo(() => {
        if (id) {
            return id;
        }
        return generatedId;
    }, [generatedId, id]);
    return (_jsxs(LegacyField, { id: newId, label: label, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: classModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, children: [_jsx(Slider, { ...sliderProps, id: id, classModifier: classModifier }), children, _jsx(HelpMessage, { message: helpMessage, isVisible: !message })] }));
};
export { SliderInput };

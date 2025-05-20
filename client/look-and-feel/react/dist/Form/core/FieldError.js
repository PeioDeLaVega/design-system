import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "./getComponentClassName";
import { MessageTypes } from "./MessageTypes";
const DEFAULT_CLASS_NAME = "af-form__message";
export const FieldError = ({ message = null, messageType = MessageTypes.error, }) => {
    const className = getComponentClassName(DEFAULT_CLASS_NAME, messageType, DEFAULT_CLASS_NAME);
    return (message && (_jsxs("small", { className: className, children: [_jsx("span", { className: "glyphicon glyphicon-exclamation-sign" }), _jsx("span", { className: `af-form__${messageType}-text`, children: message })] })));
};

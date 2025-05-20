import { MessageTypes } from "./MessageTypes";
const getFieldInputClassModifier = (modifier, disabled) => disabled ? `${modifier} disabled` : modifier;
const getInputClassModifier = (modifier, children) => children ? `${modifier} hasinfobulle` : modifier;
const getModifier = (messageType) => {
    let modifier = "error";
    switch (messageType) {
        case MessageTypes.success:
            modifier = "success";
            break;
        case MessageTypes.warning:
            modifier = "warning";
            break;
        default:
            break;
    }
    return modifier;
};
const getMessageClassModifier = (messageType, message, modifier) => {
    if (!message) {
        return "";
    }
    const messageModifier = getModifier(messageType);
    if (!messageModifier) {
        return "";
    }
    return modifier ? `${modifier} ${messageModifier}` : messageModifier;
};
export const FormClassManager = {
    getFieldInputClassModifier,
    getInputClassModifier,
    getModifier,
    getMessageClassModifier,
};

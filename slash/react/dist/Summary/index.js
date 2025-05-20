import { jsx as _jsx } from "react/jsx-runtime";
import { Alert } from "../Alert/Alert";
import { generateId } from "../utilities/helpers/generateId";
export const Summary = ({ messages = [], isVisible = true, title = "Invalid form", classModifier = "error", ...args }) => {
    const messagesNotBlank = messages.filter((message) => Boolean(message));
    if (!messages || !isVisible || messagesNotBlank.length === 0) {
        return null;
    }
    return (_jsx(Alert, { icon: "glyphicon glyphicon-warning-sign", title: title, classModifier: classModifier, ...args, children: _jsx("ul", { className: "af-summary__message-list", children: messages.map((message) => (_jsx("li", { className: "af-summary__message-item", children: message }, `message_${generateId({ message })}`))) }) }));
};

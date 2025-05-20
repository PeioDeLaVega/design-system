import { jsx as _jsx } from "react/jsx-runtime";
export const HelpMessage = ({ message, isVisible = true }) => isVisible && _jsx("small", { className: "af-form__help", children: message });

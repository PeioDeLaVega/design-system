import { MessageTypes } from "./MessageTypes";
type FieldProps = {
    message?: string | null;
    messageType?: MessageTypes;
    errorId?: string;
};
export declare const FieldError: ({ message, messageType, errorId, }: FieldProps) => "" | import("react/jsx-runtime").JSX.Element | null;
export {};

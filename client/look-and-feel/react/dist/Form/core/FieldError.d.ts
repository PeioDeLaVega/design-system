import { MessageTypes } from "./MessageTypes";
type FieldProps = {
    message?: string | null;
    messageType?: MessageTypes;
};
export declare const FieldError: ({ message, messageType, }: FieldProps) => "" | import("react/jsx-runtime").JSX.Element | null;
export {};

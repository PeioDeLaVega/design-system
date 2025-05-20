import { MessageTypes } from ".";
export const useAriaInvalid = (message, forceDisplayMessage, messageType) => Boolean(message && forceDisplayMessage && messageType === MessageTypes.error);

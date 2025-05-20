import { type HTMLAttributes, type ReactElement, type ReactNode } from "react";
type Props = {
    children: ReactNode;
    idControl: string;
};
declare const ToggleButton: ({ children, idControl }: Props) => false | ReactElement<HTMLAttributes<HTMLElement>, string | import("react").JSXElementConstructor<any>>;
export { ToggleButton };

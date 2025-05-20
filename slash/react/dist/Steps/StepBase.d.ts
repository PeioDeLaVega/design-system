import { ReactNode } from "react";
type Props = {
    id: string;
    title: string;
    children?: ReactNode;
    className?: string;
    classModifier?: string;
};
declare const StepBase: ({ children, id, title, className, classModifier }: Props) => import("react/jsx-runtime").JSX.Element;
export { StepBase };

import { type ReactNode, type MouseEvent } from "react";
export interface TabsStatelessProps {
    children: ReactNode;
    activeIndex: string;
    className?: string;
    classModifier?: string;
}
export interface TabsStatelessHandlers {
    onChange: (event: MouseEvent<HTMLButtonElement>, index: string) => void;
}
type Props = TabsStatelessProps & TabsStatelessHandlers;
declare const TabsStateless: ({ activeIndex, className, classModifier, children, onChange, }: Props) => import("react/jsx-runtime").JSX.Element;
export { TabsStateless };

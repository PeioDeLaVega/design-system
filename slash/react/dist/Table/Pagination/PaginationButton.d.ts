import { ReactNode } from "react";
type PaginationButtonProps = {
    isVisible?: boolean;
    active?: boolean;
    children?: ReactNode;
    value: number;
    onChange: (e: {
        value: number;
    }) => void;
};
declare const PaginationButton: ({ isVisible, active, children, value, onChange, }: PaginationButtonProps) => import("react/jsx-runtime").JSX.Element | null;
export { PaginationButton };

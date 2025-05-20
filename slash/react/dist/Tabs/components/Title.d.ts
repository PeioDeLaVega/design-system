import React from "react";
export type TitleComponentProps = {
    enable?: boolean | null;
    active: boolean;
    className?: string;
    classModifier?: string;
    id: string;
    children?: React.ReactNode;
    onChange: (event: React.MouseEvent<HTMLButtonElement>, index: string) => void;
};
declare const Title: {
    ({ active, onChange, children, classModifier, className, enable, id, }: TitleComponentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { Title };

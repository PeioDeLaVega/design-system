type LiProps = {
    isVisible?: boolean;
    active?: boolean;
    value: number;
    onChange: (e: {
        value: number;
    }) => void;
};
declare const Li: ({ isVisible, active, value, ...props }: LiProps) => import("react/jsx-runtime").JSX.Element | null;
export { Li };

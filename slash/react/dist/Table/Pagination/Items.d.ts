export type Props = {
    id?: string;
    className?: string;
    classModifier?: string;
    displayLabel?: string;
    elementsLabel?: string;
    items?: number[];
    numberItems?: number;
    selectAriaLabel?: string;
    onChange: (e: {
        value: number;
    }) => void;
};
declare const Items: ({ className, classModifier, onChange, displayLabel, elementsLabel, selectAriaLabel, id, items, numberItems, }: Props) => import("react/jsx-runtime").JSX.Element;
export { Items };

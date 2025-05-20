import "@axa-fr/design-system-slash-css/dist/Table/Paging.scss";
import { ComponentPropsWithoutRef } from "react";
import { Items } from "./Items";
import { Pager } from "./Pager";
type PagingComponentProps = ComponentPropsWithoutRef<typeof Pager> & ComponentPropsWithoutRef<typeof Items>;
type OnChangePager = (e: {
    numberItems: number;
    page: number;
}) => void;
export type Props = Omit<PagingComponentProps, "onChange"> & {
    onChange?: OnChangePager;
};
declare const Paging: ({ className, classModifier, currentPage, displayLabel, selectAriaLabel, elementsLabel, id, mode, nextLabel, numberItems, numberPages, ofLabel, previousLabel, items, onChange, }: Props) => import("react/jsx-runtime").JSX.Element;
export { Paging };

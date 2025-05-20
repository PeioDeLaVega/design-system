import { ComponentPropsWithoutRef } from "react";
import "@axa-fr/design-system-slash-css/dist/Table/Table.scss";
type TableProps = ComponentPropsWithoutRef<"table"> & {
    classModifier?: string;
};
declare const Table: {
    ({ className, classModifier, children, ...othersProps }: TableProps): import("react/jsx-runtime").JSX.Element;
    Header: ({ children, className, classModifier, ...otherProps }: Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> & {
        classModifier?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, className, classModifier, ...otherProps }: Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> & {
        classModifier?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    THead: ({ children, className, classModifier, ...otherProps }: Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> & {
        classModifier?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    TBody: ({ children, className, classModifier, ...otherProps }: Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> & {
        classModifier?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Th: ({ children, id, className, classModifier, ...otherProps }: Omit<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> & {
        classModifier?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Tr: ({ children, id, className, classModifier, ...otherProps }: Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> & {
        classModifier?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Td: ({ children, id, className, classModifier, ...otherProps }: Omit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> & {
        classModifier?: string;
    }) => import("react/jsx-runtime").JSX.Element;
};
export { Table };

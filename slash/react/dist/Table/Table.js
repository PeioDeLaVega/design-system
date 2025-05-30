import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
import { TBody } from "./TBody";
import { THead } from "./THead";
import { Td } from "./Td";
import { Th } from "./Th";
import { Tr } from "./Tr";
import "@axa-fr/design-system-slash-css/dist/Table/Table.scss";
const Table = ({ className, classModifier, children, ...othersProps }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-table");
    return (_jsx("table", { className: componentClassName, ...othersProps, children: children }));
};
Table.Header = THead;
Table.Body = TBody;
Table.THead = THead;
Table.TBody = TBody;
Table.Th = Th;
Table.Tr = Tr;
Table.Td = Td;
export { Table };

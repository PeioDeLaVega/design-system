import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileLine } from "./FileLine";
import { FileErrors } from "./FileErrors";
import { getComponentClassName } from "../../utilities";
const FileTable = ({ errors, values, className, classModifier, disabled, onClick, }) => {
    const componentClassName = getComponentClassName(className, classModifier, "custom-table-file af-file-table");
    return (_jsxs("div", { className: componentClassName, children: [errors && errors.length > 0 && _jsx(FileErrors, { errors: errors }), values && values.length > 0 && (_jsx("ul", { className: "af-form__file-list", children: values.map(({ file, id }) => (_jsx(FileLine, { disabled: disabled, file: file, onClick: onClick, id: id }, id))) }))] }));
};
export { FileTable };

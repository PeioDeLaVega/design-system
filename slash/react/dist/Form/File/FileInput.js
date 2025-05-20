import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Form/File/File.scss";
import { useId } from "react";
import { FieldInput, HelpMessage, LegacyField, useInputClassModifier, } from "../core";
import { File } from "./File";
import { FileTable } from "./FileTable";
import { useAriaInvalid } from "../core/useAriaInvalid";
const FileInput = ({ values = [], name = "", onChange, classModifier = "", message, children, helpMessage, id = "", forceDisplayMessage, messageType, classNameContainerLabel, classNameContainerInput, label, isVisible, className, errors, fileLabel, disabled = false, required, ...otherFileProps }) => {
    const onDeleteClick = (selectedId, selectInputId) => {
        const newValues = values.filter((element) => element.id !== selectedId);
        onChange({
            values: newValues,
            name,
            id: selectInputId,
            fileAction: "delete",
        });
    };
    const inputUseId = useId();
    const errorUseId = useId();
    const inputId = id ?? inputUseId;
    const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(classModifier, disabled, Boolean(children), required);
    const rowModifier = `${inputFieldClassModifier} label-top`;
    const isInvalid = useAriaInvalid(message, forceDisplayMessage, messageType);
    return (_jsxs(LegacyField, { label: label, id: inputId, message: message, messageType: messageType, isVisible: isVisible, forceDisplayMessage: forceDisplayMessage, className: className, classModifier: rowModifier, classNameContainerLabel: classNameContainerLabel, classNameContainerInput: classNameContainerInput, errorId: errorUseId, children: [_jsxs(FieldInput, { className: "af-form__file", classModifier: inputFieldClassModifier, children: [_jsx(File, { id: inputId, name: name, onChange: onChange, disabled: disabled, classModifier: inputClassModifier, label: fileLabel, required: required || classModifier?.includes("required"), "aria-describedby": errorUseId, "aria-invalid": isInvalid, ...otherFileProps }), children] }), _jsx(HelpMessage, { message: helpMessage, isVisible: !message }), _jsx(FileTable, { errors: errors, values: values, onClick: (selectedId) => onDeleteClick(selectedId, inputId), classModifier: classModifier })] }));
};
export { FileInput };

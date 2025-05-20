import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDropzone, } from "react-dropzone";
import { useId } from "react";
import { getComponentClassName } from "../../utilities";
import { Button } from "../../Button/Button";
const File = ({ className, classModifier, id, name, disabled, onChange, multiple = true, maxSize = 20000000, minSize = 0, accept, readOnly, placeholder = "Glissez/déposez vos fichiers", label = "Parcourir", icon = "open", ...otherProps }) => {
    const valueId = useId();
    const errorsId = useId();
    const handleOnChange = (acceptedFiles, rejectedFiles) => {
        if (!onChange)
            return;
        const values = acceptedFiles.map((file) => ({
            id: valueId,
            file: {
                ...file,
                lastModified: file.lastModified,
                name: file.name,
                type: file.type,
                size: file.size,
                stream: file.stream,
                arrayBuffer: file.arrayBuffer,
                slice: file.slice,
                text: file.text,
                preview: URL.createObjectURL(file),
            },
        }));
        const errors = rejectedFiles.map((error) => ({
            id: errorsId,
            file: {
                errors: error.errors,
                file: {
                    ...error.file,
                    lastModified: error.file.lastModified,
                    name: error.file.name,
                    type: error.file.type,
                    size: error.file.size,
                },
            },
        }));
        const onChangeProps = {
            values,
            errors,
            name,
            fileAction: "add",
            id,
        };
        onChange(onChangeProps);
    };
    const { getRootProps, getInputProps, open } = useDropzone({
        onDrop: handleOnChange,
        minSize,
        maxSize,
        multiple,
        accept,
        disabled,
    });
    const componentClassName = getComponentClassName(className, classModifier, "af-form__file-input");
    return (_jsxs("div", { className: componentClassName, children: [_jsxs("div", { ...getRootProps({ className: "drop-box" }), children: [_jsx("input", { ...getInputProps({ id, name, readOnly, ...otherProps }) }), _jsx("div", { children: placeholder })] }), _jsxs(Button, { type: "button", className: "af-btn", classModifier: "file hasIconLeft", onClick: open, disabled: disabled, children: [_jsx("i", { className: `glyphicon glyphicon-${icon}` }), " ", label] })] }));
};
export { File };

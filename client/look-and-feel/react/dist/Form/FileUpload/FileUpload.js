import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ItemMessage, Spinner, Svg, } from "@axa-fr/design-system-apollo-react/lf";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/FileUpload/FileUpload.scss";
import plus from "@material-symbols/svg-400/outlined/add_circle-fill.svg";
import check from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import close from "@material-symbols/svg-400/outlined/close-fill.svg";
import error from "@material-symbols/svg-400/outlined/error-fill.svg";
import visibility from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import classNames from "classnames";
import { useId } from "react";
function getReadableFileSizeString(fileSizeInBytes) {
    let i = -1;
    let fileSizeInBytesCopy = fileSizeInBytes;
    const byteUnits = [" Ko", " Mo", " Go"];
    do {
        fileSizeInBytesCopy /= 1000;
        i += 1;
    } while (fileSizeInBytesCopy > 1000);
    return Math.max(fileSizeInBytesCopy, 0.1).toFixed(1) + byteUnits[i];
}
const FileUpload = ({ id, label, buttonLabel, instructions, dropzoneDescription, filesListLabel, required, files, errors, globalError, isMobile, withPadding = false, onView, onDelete, ...otherProps }) => {
    const idError = useId();
    const getIcon = (isInError, isLoading) => {
        if (isInError) {
            return (_jsx(Svg, { src: error, className: "af-form__file-title-container-icon-error" }));
        }
        if (isLoading) {
            return _jsx(Spinner, { size: 24 });
        }
        return (_jsx(Svg, { src: check, className: "af-form__file-title-container-icon-success" }));
    };
    return (_jsxs("div", { children: [_jsxs("label", { className: "af-form__group--label", htmlFor: id, children: [label, " ", required ? "*" : ""] }), _jsxs("div", { className: "af-form__file-input-container", children: [_jsxs("div", { className: classNames("af-form__file-input", globalError && "af-form__file-input--error", (isMobile || (!withPadding && !dropzoneDescription)) && "is-mobile"), children: [_jsx("input", { type: "file", name: "file-input", id: id, "aria-errormessage": idError, "aria-invalid": Boolean(globalError), ...otherProps }), dropzoneDescription && (_jsxs("div", { className: "af-form__file-input-dropdown-text", children: [_jsx("p", { children: dropzoneDescription }), _jsx("p", { children: "ou" })] })), _jsx(Button, { variant: "tertiary", onClick: () => document.getElementById(id)?.click(), iconLeft: _jsx(Svg, { src: plus, className: "af-form__file-input-icon" }), children: buttonLabel })] }), globalError && _jsx(ItemMessage, { id: idError, message: globalError }), instructions && (_jsx("small", { className: "af-form__file-input-help", children: instructions }))] }), files && files.length !== 0 && (_jsxs("div", { className: "custom-table-file af-file-table", children: [filesListLabel && (_jsx("div", { className: "af-form__group--label af-form__files-list-label", children: filesListLabel })), _jsx("ul", { className: "af-form__file-list", children: files.map(({ id: fileId, name, size, isLoading }) => {
                            const effectiveSize = getReadableFileSizeString(size);
                            const isInError = errors
                                ? errors.some((fileError) => fileError.id === fileId)
                                : false;
                            const errorMessage = errors?.find((fileError) => fileError.id === fileId)?.message;
                            return (_jsxs("li", { className: "af-form__file-line", children: [_jsxs("div", { className: `af-form__file-line-container ${isInError ? "af-form__file-line-container--error" : ""}`, children: [_jsxs("div", { className: "af-form__file-title", children: [getIcon(isInError, isLoading), _jsxs("div", { children: [_jsx("span", { className: "af-form__file-name", children: name }), _jsx("span", { className: "af-form__file-size", children: effectiveSize })] })] }), _jsxs("div", { className: "af-form__file-actions", children: [onView && (_jsx(Button, { "aria-label": "Visualiser", onClick: () => onView(fileId), variant: "ghost", iconLeft: _jsx(Svg, { src: visibility }) })), onDelete && (_jsx(Button, { "aria-label": "Supprimer", onClick: () => onDelete(fileId), variant: "ghost", iconLeft: _jsx(Svg, { src: close }) }))] })] }), isInError && _jsx(ItemMessage, { message: errorMessage })] }, fileId));
                        }) })] }))] }));
};
FileUpload.displayName = "FileUpload";
export { FileUpload };

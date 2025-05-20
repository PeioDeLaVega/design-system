import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { getComponentClassName } from "../../../utilities";
import { generateId } from "../../../utilities/helpers/generateId";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Infos/Infos.scss";
const defaultClassName = "af-contrat";
const Infos = ({ infos, className, classModifier }) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    return (_jsxs("div", { className: componentClassName, children: [_jsx("i", { className: "glyphicon glyphicon-info-sign" }), _jsx("dl", { className: `${defaultClassName}__list`, children: infos.map((info) => {
                    const idTerm = info.id ?? `info-${generateId(info)}`;
                    return (_jsxs(Fragment, { children: [_jsx("dt", { id: idTerm, className: `${defaultClassName}__word`, children: info.word }), _jsx("dd", { className: `${defaultClassName}__def`, "aria-labelledby": idTerm, children: info.definition })] }, idTerm));
                }) })] }));
};
export { Infos };

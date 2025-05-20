import { SVGInjector, } from "@tanem/svg-injector";
import DOMPurify from "dompurify";
const attributesToRestore = ["fill", "stroke"];
const restoreAttributes = (element, svg) => {
    const attributes = {};
    element?.getAttributeNames().forEach((attribute) => {
        if (attribute.startsWith("aria-") ||
            attributesToRestore.includes(attribute)) {
            attributes[attribute] = element.getAttribute(attribute);
        }
    });
    Object.keys(attributes).forEach((attribute) => {
        svg.setAttribute(attribute, attributes[attribute]);
    });
};
export const svgInjector = (element, { beforeEach = () => { }, ...options } = {}) => {
    SVGInjector(element, {
        ...options,
        beforeEach: (svg) => {
            DOMPurify.sanitize(svg, {
                USE_PROFILES: { svg: true, svgFilters: true },
                IN_PLACE: true,
            });
            restoreAttributes(element, svg);
            beforeEach(svg);
        },
    });
};

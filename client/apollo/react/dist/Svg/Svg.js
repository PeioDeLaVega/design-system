import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { svgInjector } from "./svgInjector";
const cloneAttributes = (from, to) => {
    const attributes = from.getAttributeNames();
    attributes.forEach((attribute) => {
        to.setAttribute(attribute, from.getAttribute(attribute));
    });
};
export const Svg = ({ src, alt, width = 24, height = 24, ...props }) => {
    const rootRef = React.useRef(null);
    const [hasError, setHasError] = React.useState(false);
    React.useLayoutEffect(() => {
        if (hasError) {
            setHasError(false);
        }
    }, [src]);
    React.useLayoutEffect(() => {
        if (hasError) {
            return;
        }
        const root = rootRef.current;
        if (root) {
            const parent = document.createElement("div");
            const svg = document.createElement("svg");
            parent.appendChild(svg);
            cloneAttributes(root, svg);
            svg.setAttribute("width", width.toString());
            svg.setAttribute("height", height.toString());
            svgInjector(svg, {
                afterEach: (error, svgInject) => {
                    if (error) {
                        setHasError(true);
                    }
                    if (svgInject) {
                        root.innerHTML = svgInject.innerHTML;
                        cloneAttributes(svgInject, root);
                    }
                },
            });
        }
    }, [src, width, height, hasError]);
    if (hasError) {
        return alt ? (_jsx("span", { ...props, children: alt })) : null;
    }
    return (_jsx("svg", { ref: rootRef, "data-src": src, width: width, height: height, ...props }));
};

import { jsx as _jsx } from "react/jsx-runtime";
import { ContentItemMonoCore, } from "./ContentItemMonoCore";
export const getContentItemCoreProps = ({ IconComponent, BasePictureComponent, type, ...props }) => {
    if (type === "icon") {
        const { icon, title, subtitle1, subtitle2 } = props;
        return {
            title,
            primarySubtitle: subtitle1,
            subtitle: subtitle2,
            leftComponent: _jsx(IconComponent, { "data-testid": "icon", src: icon }),
        };
    }
    if (type === "picture") {
        return {
            ...props,
            leftComponent: (_jsx(BasePictureComponent, { src: props.picture, alt: props.title })),
        };
    }
    return props;
};
export const ContentItemMonoCommon = (props) => {
    return _jsx(ContentItemMonoCore, { ...getContentItemCoreProps(props) });
};

import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoApollo.scss";
import { BasePicture } from "../BasePicture/BasePictureApollo";
import { Icon } from "../Icon/IconApollo";
import { ContentItemMonoCommon, } from "./ContentItemMonoCommon";
export const ContentItemMono = (props) => (_jsx(ContentItemMonoCommon, { ...props, BasePictureComponent: BasePicture, IconComponent: Icon }));

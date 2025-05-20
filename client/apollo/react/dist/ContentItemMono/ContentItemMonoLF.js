import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoLF.scss";
import { BasePicture } from "../BasePicture/BasePictureLF";
import { Icon } from "../Icon/IconLF";
import { ContentItemMonoCommon, } from "./ContentItemMonoCommon";
export const ContentItemMono = (props) => (_jsx(ContentItemMonoCommon, { ...props, BasePictureComponent: BasePicture, IconComponent: Icon }));

import { jsx as _jsx } from "react/jsx-runtime";
import facebook from "../../assets/svg/facebook.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import twitterx from "../../assets/svg/twitterx.svg";
import youtube from "../../assets/svg/youtube.svg";
import { Svg } from "../../Svg";
export const DynamicIcon = ({ iconName, className, }) => {
    switch (iconName) {
        case "facebook":
            return _jsx(Svg, { src: facebook, className: className });
        case "twitter":
            return _jsx(Svg, { src: twitterx, className: className });
        case "youtube":
            return _jsx(Svg, { src: youtube, className: className });
        case "linkedin":
            return _jsx(Svg, { src: linkedin, className: className });
        default:
            return iconName;
    }
};

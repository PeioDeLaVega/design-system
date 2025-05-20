import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/TimelineVertical/TimelineVerticalLF.scss";
import { TimelineVertical as TimelineVerticalCommon } from "./TimelineVerticalCommon";
import { Tag } from "../Tag/TagLF";
export const TimelineVertical = ({ tag, tagProps = {}, ...props }) => (_jsx(TimelineVerticalCommon, { tag: _jsx(Tag, { ...tagProps, children: tag }), ...props }));

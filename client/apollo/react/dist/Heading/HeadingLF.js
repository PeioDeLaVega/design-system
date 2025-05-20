import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-apollo-css/dist/Heading/HeadingLF.scss";
import { DEFAULT_TAG_PROPS, HeadingCommon } from "./HeadingCommon";
import { Tag } from "../Tag/TagLF";
export const Heading = ({ tag, tagProps = {}, ...props }) => (_jsx(HeadingCommon, { ...props, tag: tag && (_jsx(Tag, { ...DEFAULT_TAG_PROPS, ...tagProps, children: tag })) }));

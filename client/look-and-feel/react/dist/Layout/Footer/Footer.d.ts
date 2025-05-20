import "@axa-fr/design-system-look-and-feel-css/dist/common/reboot.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Footer/Footer.scss";
import { FC } from "react";
import { SocialMedia } from "./MenuIcons";
import { Link } from "./MenuLink";
type Props = {
    links: Link[];
    socialMedias?: SocialMedia[];
    copyright: string;
    expandLinkText: string;
    id?: string;
};
export declare const Footer: FC<Props>;
export {};

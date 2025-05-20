export type SocialMedia = {
    icon: "facebook" | "twitter" | "youtube" | "linkedin";
    link: string;
};
type MenuIconsProps = {
    socialMedias: SocialMedia[];
};
export declare const MenuIcons: ({ socialMedias }: MenuIconsProps) => import("react/jsx-runtime").JSX.Element | null;
export {};

export type Link = {
    link: string;
    text: string;
    openInCurrentTab?: boolean;
};
type MenuLinkProps = {
    links: Link[];
    isAboutOpen?: boolean;
};
export declare const MenuLink: ({ links, isAboutOpen }: MenuLinkProps) => import("react/jsx-runtime").JSX.Element | null;
export {};

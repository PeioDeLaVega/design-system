import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/PreviousLink/PreviousLink.scss";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
type PreviousLinkProps = {
    handleClick: () => void;
} & ComponentPropsWithoutRef<"div">;
declare const PreviousLink: ({ handleClick, children, ...otherProps }: PropsWithChildren<PreviousLinkProps>) => import("react/jsx-runtime").JSX.Element | null;
export { PreviousLink };

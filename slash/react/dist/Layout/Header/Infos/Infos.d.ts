import { ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Infos/Infos.scss";
export type TInfo = {
    definition: ReactNode;
    id?: string;
    word: ReactNode;
};
type InfosProps = {
    classModifier?: string;
    className?: string;
    infos: TInfo[];
};
declare const Infos: ({ infos, className, classModifier }: InfosProps) => import("react/jsx-runtime").JSX.Element;
export { Infos };

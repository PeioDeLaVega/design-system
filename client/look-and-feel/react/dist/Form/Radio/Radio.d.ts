import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Radio.scss";
import React, { ReactNode } from "react";
declare const Radio: React.ForwardRefExoticComponent<{
    label: string | ReactNode;
    errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
export { Radio };

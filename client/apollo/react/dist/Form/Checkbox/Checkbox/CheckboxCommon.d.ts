import React from "react";
type CheckboxIcon = {
    checkBoxIcon: string;
};
export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    errorId?: string;
    hasError?: boolean;
    className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">;
export type CheckboxCommonProps = CheckboxProps & CheckboxIcon;
declare const CheckboxCommon: {
    ({ errorId, checkBoxIcon, hasError, ...inputProps }: CheckboxCommonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { CheckboxCommon };

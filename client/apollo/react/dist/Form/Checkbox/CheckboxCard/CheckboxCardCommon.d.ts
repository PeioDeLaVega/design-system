import React, { ComponentPropsWithRef } from "react";
import { type TCheckboxCardItem } from "./CheckboxCardItem";
import type { CheckboxComponent, IconComponent } from "./types";
export type CheckboxCardProps = ComponentPropsWithRef<"input"> & {
    type: "vertical" | "horizontal";
    labelGroup?: string;
    descriptionGroup?: string;
    isRequired?: boolean;
    options: TCheckboxCardItem[];
    onChange?: React.ChangeEventHandler;
};
type CheckboxCardCommonProps = CheckboxCardProps & CheckboxComponent & IconComponent;
export declare const CheckboxCardCommon: {
    ({ className, labelGroup, descriptionGroup, CheckboxComponent, IconComponent, isRequired, options, onChange, type, }: CheckboxCardCommonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

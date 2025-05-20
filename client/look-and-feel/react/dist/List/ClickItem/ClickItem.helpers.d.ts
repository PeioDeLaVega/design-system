import type { ComponentProps, ComponentType, ElementType } from "react";
import type { TParentClickComponentProps } from "./types";
export declare const createClickItemParent: <TComponent extends ElementType>(Wrapper: ComponentType<TComponent> | TComponent, wrapperProps: ComponentProps<TComponent>) => ({ children, ...clickItemProps }: TParentClickComponentProps) => import("react/jsx-runtime").JSX.Element;

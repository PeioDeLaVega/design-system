import { ComponentPropsWithRef, ReactNode } from "react";
export declare const itemTabBarVariants: {
    readonly tabBar: "tabBar";
    readonly header: "header";
};
export type ItemTabBarVariants = keyof typeof itemTabBarVariants;
type ItemTabBarProps = ComponentPropsWithRef<"button"> & {
    variant?: ItemTabBarVariants;
    isActive?: boolean;
    icon?: ReactNode;
    title: string;
};
export declare const ItemTabBar: import("react").ForwardRefExoticComponent<Omit<ItemTabBarProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export {};

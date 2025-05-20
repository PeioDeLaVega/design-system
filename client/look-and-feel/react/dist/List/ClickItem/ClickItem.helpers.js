import { jsx as _jsx } from "react/jsx-runtime";
export const createClickItemParent = (Wrapper, wrapperProps) => {
    const ClickItemWrapper = ({ children, ...clickItemProps }) => (_jsx(Wrapper, { ...wrapperProps, ...clickItemProps, children: children }));
    return ClickItemWrapper;
};

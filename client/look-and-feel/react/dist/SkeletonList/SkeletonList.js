import { jsx as _jsx } from "react/jsx-runtime";
import { Skeleton, List } from "..";
export const SkeletonList = ({ children, isLoading, lists = [], classModifierList, }) => isLoading
    ? lists.map(({ lines = 1, grid }) => (_jsx(List, { classModifier: classModifierList, children: [...Array(lines).keys()].map(() => (_jsx(Skeleton, { grid: grid }, crypto.randomUUID()))) }, crypto.randomUUID())))
    : children;

import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Skeleton/Skeleton.scss";
export const Skeleton = ({ className = "af-skeleton", grid = [], ariaBusy = true, ariaLabel = "Chargement", maxCols = 12, colGap = 16, rowGap = 8, isLoading = true, children, }) => isLoading ? (_jsx("div", { className: `${className}-container`, "aria-label": ariaLabel, role: "status", "aria-live": "polite", "aria-busy": ariaBusy, style: {
        "--max-cols": maxCols,
        "--col-gap": `calc(${colGap} / var(--font-size-base) * 1rem)`,
        "--row-gap": `calc(${rowGap} / var(--font-size-base) * 1rem)`,
    }, children: grid.map((cols, indexRow) => cols.map((colSize, indexCol) => (_jsx("div", { style: { "--col-size": colSize }, className: className }, `${indexRow}-${indexCol}`)))) })) : (children);

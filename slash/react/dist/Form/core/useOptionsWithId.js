import { useId } from "react";
export function useOptionsWithId(options, id) {
    const reactId = useId();
    if (!options) {
        return [];
    }
    return options.map((option, index) => {
        if (option.id) {
            return option;
        }
        return { ...option, id: `${id ?? reactId}_${index}` };
    });
}

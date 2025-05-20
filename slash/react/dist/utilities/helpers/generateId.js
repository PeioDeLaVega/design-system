let counter = 1;
const map = new WeakMap();
export const generateId = (item) => {
    if (!map.has(item)) {
        map.set(item, counter);
        counter += 1;
        return generateId(item);
    }
    return `id-${map.get(item)}`;
};

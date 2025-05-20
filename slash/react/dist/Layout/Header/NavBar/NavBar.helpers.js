export const getPosition = (max, position, direction) => {
    switch (direction) {
        case "ArrowRight":
        case "ArrowDown":
            return position + 1 < max ? position + 1 : 0;
        case "ArrowLeft":
        case "ArrowUp":
            return position - 1 < 0 ? max - 1 : position - 1;
        default:
            return position;
    }
};

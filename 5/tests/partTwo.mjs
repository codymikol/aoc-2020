import {BSP_DATA} from "../data.mjs";

function solve() {
    //todo(mikol): to be cleaner, this should be a recursive function.
    return BSP_DATA
        .map(bsp => bsp.getSeatId())
        .sort((x, y) => x - y)
        .reduce((col, id, idx, collection) => {
            if (col !== null) return col;
            let next = collection[idx + 1];
            return next !== id + 1 ? next - 1 : null;
        }, null)
}

console.log(solve())


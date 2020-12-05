import {BSP_DATA} from "../data.mjs";

function searchForMySeatId(seats, index) {
    if (seats[index + 1] !== seats[index] + 1) return seats[index + 1] - 1;
    return searchForMySeatId(seats, index + 1);
}

function solve() {
    return searchForMySeatId(
        BSP_DATA
            .map(bsp => bsp.getSeatId())
            .sort((x, y) => x - y),
        0)
}

console.log(solve())


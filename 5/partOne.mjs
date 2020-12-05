import {BSP_DATA} from "./data.mjs";

function solve() {
    return BSP_DATA.reduce((col, bsp) => {
        let seatId = bsp.getSeatId();
        return seatId > col ? seatId : col;
    }, 0)
}

console.log(solve());

import utils from "./utils.mjs";
import maths from "../maths.mjs";

const PART_TWO_SLOPES = [[1,1], [3,1],[5,1],[7,1],[1,2]]

function solve() {
    return maths.product(PART_TWO_SLOPES.map((coords) => utils.findTreesInGridByVelocity(coords[0],coords[1])))
}

console.log(solve())

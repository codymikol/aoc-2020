import {data, number} from "./data.mjs";
import utils from "./utils.mjs";
import maths from "../maths.mjs"

/**
 * An 0(n^2) solution to day one part two, finds three numbers in the collection
 * that sum to 2020 and returns the product ∏ for all three.
 * @type {Number}
 */
function solve() {
    return maths.product(utils.findTripleAddsTo(data, number))
}

console.log(solve())



import { data, number } from './data.mjs';
import utils from './utils.mjs';
import maths from '../maths.mjs'

/**
 * An O(n) solution to day 1 part one, finds finds two numbers in the collection
 * that sum to 2020 and returns the product ∏ for both.
 * @return {number} - the answer
 */
function solve() {
    return maths.product(utils.findPairAddsTo(data, number));
}

console.log(solve())

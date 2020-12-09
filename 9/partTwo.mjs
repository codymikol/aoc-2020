import {solvePartOne} from "./partOne.mjs";
import maths from "../maths.mjs";
import {data} from "./data.mjs";


// Less lazy recursive edition
function searchForContiguousMatch(numbers, target) {
    if(numbers.length < 2) throw new Error("You missed the ball")
    let includes = 2;
    while(includes < numbers.length ) {
        let currentRange = numbers.slice(0, includes - 2)
        let contiguousResult = maths.sum(currentRange)
        if(contiguousResult === target) {
            return Math.min(...currentRange) + Math.max(...currentRange)
        }
        includes ++;
    }
    numbers.shift()
    return searchForContiguousMatch(numbers, target)
}

function solve() {
    return searchForContiguousMatch(data, solvePartOne())
}

console.log('Part Two Answer', solve())

import {data} from "./data.mjs";

function solve() {
    return data.filter(entry => entry.meetsLengthRequirements()).length;
}

console.log(solve())

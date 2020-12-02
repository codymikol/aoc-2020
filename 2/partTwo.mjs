import { data} from "./data.mjs";

function solve() {
    return data.filter((entry) => entry.meetsPositionalRequirements()).length;
}

console.log(solve())

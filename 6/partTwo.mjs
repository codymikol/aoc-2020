import {data} from "./data.mjs";
import maths from "../maths.mjs";
import utils from "./utils.mjs";

function solve() {
    return maths.sum(
        utils
            .getGroupsFromManifest(data)
            .map(utils.getGroupAgreedLetterCount)
    )
}

console.log(solve())

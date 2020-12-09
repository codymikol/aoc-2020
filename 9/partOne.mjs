import {data} from './data.mjs';
import utils from '../1/utils.mjs';

// Lazy imperative edition :/

export function solvePartOne() {

    const PREAMBLE = 25;

    for(let i = 0; i < data.length; i++) {
        if(i > PREAMBLE - 1) {
            let result = utils.findPairAddsTo(data.slice(i - PREAMBLE, i), data[i])
            if(!result) return data[i]
        }
    }

}

console.log('Part One Answer', solvePartOne())

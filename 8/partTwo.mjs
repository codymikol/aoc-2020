import { data } from './data.mjs'
import Machine from "./machine.mjs";


function solve() {
    let machine = new Machine(data);
    machine.findValidSolution()
    return machine.accumulator;
}

console.log(solve())

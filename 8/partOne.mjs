import { data } from './data.mjs'
import Machine from "./machine.mjs";


function solve() {
    let machine = new Machine(data);
    machine.run({maxExecutionTime: 1});
    return machine.accumulator;
}

console.log(solve())

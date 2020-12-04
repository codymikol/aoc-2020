import {FIELD_VALIDATORS, PASSPORTS} from "../data.mjs";

function hasAllRequirements(passport) {
    return Object.keys(FIELD_VALIDATORS).every((passportField) => {
        console.log(passportField, FIELD_VALIDATORS[passportField](passport[passportField]))
        return FIELD_VALIDATORS[passportField](passport[passportField]);
    })
}

function solve() {
    return PASSPORTS.filter(hasAllRequirements).length;
}

console.log(solve())

//This is bad, but its 3am maybe I'll fix later? 🤷‍♂️

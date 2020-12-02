import { data } from '../data.mjs'
import {describe, test} from "@jest/globals";

let first = data[0];

describe('data parsing', () => {

    test('it correctly parses registerA', () => {
        expect(first.registerA).toBe(6)
    })

    test('it correctly parses registerB', () => {
        expect(first.registerB).toBe(9)
    })

    test('it correctly parses the letter', () => {
        expect(first.letter).toBe('z')
    })

    test('it correctly parses the password', () => {
        expect(first.password).toBe('qzzzzxzzfzzzz')
    })

})


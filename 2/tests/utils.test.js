import {describe, test} from "@jest/globals";
import utils from "../utils.mjs";

describe('getUniqueLetterCount', () => {

    test('get unique letter should return a count of letters in a given string', () => {
        expect(utils.getUniqueLetterCount('abacada', 'a')).toBe(4)
    })

})

describe('passwordMeetsMinimumRequirements', () => {

    test('a password with less than the required letters should return false', () => {
        expect(utils.passwordMeetsMinimumRequirements('abcdefg', 'h', 1)).toBe(false)
    })

    test('a password with exactly the minimum amount of required letters should return true', () => {
        expect(utils.passwordMeetsMinimumRequirements('aaabccc', 'b', 1)).toBe(true)
    })

    test('a password with more than the minimum should return true', () => {
        expect(utils.passwordMeetsMinimumRequirements('aaabccc', 'a', 1)).toBe(true)
    })

})

describe('passwordMeetsMaximumRequirements', () => {

    test('a password with more than the required letters should return false', () => {
        expect(utils.passwordMeetsMaximumRequirements('aaaabcde', 'a', 3)).toBe(false)
    })

    test('a password with exactly the same letters as the maximum should return true', () => {
        expect(utils.passwordMeetsMaximumRequirements('aaaabcde', 'a', 4)).toBe(true)
    })

    test('a password with less than the required letters should return true', () => {
        expect(utils.passwordMeetsMaximumRequirements('aaaabcde', 'a', 5)).toBe(true)
    })

})

describe('wordContainsLetterAtPosition', () => {

    test('it should return true if the 1 indexed position contains the given letter', () => {
        expect(utils.wordContainsLetterAtPosition('cody', 'c', 1)).toBe(true)
        expect(utils.wordContainsLetterAtPosition('cody', 'o', 2)).toBe(true)
        expect(utils.wordContainsLetterAtPosition('cody', 'd', 3)).toBe(true)
        expect(utils.wordContainsLetterAtPosition('cody', 'y', 4)).toBe(true)
    })

    it('should return false if the letter does not match the position', () => {
        expect(utils.wordContainsLetterAtPosition('cody', 'y', 1)).toBe(false)
    })

    it('should return false for non existing indexes', () => {
        expect(utils.wordContainsLetterAtPosition('cody', 'y', 100)).toBe(false)
        expect(utils.wordContainsLetterAtPosition('cody', 'y', 0)).toBe(false)
    })

})

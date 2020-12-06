import {describe, it} from "@jest/globals";
import {data} from "../data.mjs";
import utils from "../utils.mjs";

describe('utils', () => {

    describe('getGroupsFromManifest', () => {

        it('should be able to get the correct group', () => {
            expect(utils.getGroupsFromManifest(data)[0]).toEqual(`qpicundo
fiqcdbkyuoz`)
        })

    })

    describe('getGroupUniqueLetterCound', () => {

        it('should be able to count unique letters in a group', () => {
            expect(utils.getGroupUniqueLetterCount(`qpicundo
fiqcdbkyuoz`)).toBe(13)
        })

    })

    describe('getGroupAgreedLetterCount', () => {

        it('should be able to find a count of letters everyone in the group voted yes on', () => {
            expect(utils.getGroupAgreedLetterCount(`abcd
abc
ab`)).toBe(2)
        })

    })

})

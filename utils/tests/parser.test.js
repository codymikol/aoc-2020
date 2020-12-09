import {beforeEach, describe, it} from "@jest/globals";
import parser from '../parser.mjs'

describe('parser', () => {

    // combination into complex grouping...

    const groupData = `hgt:159cm
pid:561068005 eyr:2025 iyr:2017 cid:139 ecl:blu hcl:#ceb3a1
byr:1940

iyr:2014
byr:1986 pid:960679613 eyr:2025 ecl:hzl

cid:211 ecl:blu hcl:#7d3b0c iyr:2011 pid:006632702
byr:1982 eyr:2023 hgt:68in`

    describe('table', () => {
            parse.parse(data, )
    })

    // Pulling arguments out of a structured string

   const structuredData = `6-9 z: qzzzzxzzfzzzz
2-4 s: xgmsdts
6-7 k: khqpsvk`

    const structuredRows = structuredData.split('\n')

    describe('structuredRow', () => {

        it('should be able to parse a structuredRow', () => {
            expect(parser.structuredRow(structuredRows[0], '$ $: $')).toBe(['6-9', 'z', 'qzzzzxzzfzzzz'])
        })

    })

})

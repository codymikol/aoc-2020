import utils from "../utils.mjs";
import {describe, it} from "@jest/globals";

describe('parsePassportBatchFile', () => {

    it('should convert a batch file into a collection of passports', () => {

        let batch = `iyr:2016 hgt:193cm eyr:2029
byr:1934 hcl:#b6652a pid:901756621
ecl:brn

eyr:2017 hcl:z pid:#2f9848 iyr:2024
hgt:170cm

hgt:60in eyr:2026 byr:1922 hcl:#18171d iyr:2016
pid:921038878`

        expect(utils.parsePassportBatchFile(batch)).toEqual([
            {
                iyr: '2016',
                hgt: '193cm',
                eyr: '2029',
                byr: '1934',
                hcl: '#b6652a',
                pid: '901756621',
                ecl: 'brn',
            },
            {
                eyr: '2017',
                hcl: 'z',
                pid: '#2f9848',
                iyr: '2024',
                hgt: '170cm'
            },
            {
                hgt: '60in',
                eyr: '2026',
                byr: '1922',
                hcl: '#18171d',
                iyr: '2016',
                pid: '921038878'
            }
        ])

    })

    describe('valid height', () => {

        it('an invalid suffix should return false', () => {
            expect(utils.isValidHeight('160cmcm')).toBe(false)
        })

        it('a cm with less than 150 should return false', () => {
            expect(utils.isValidHeight('149cm')).toBe(false)
        })

        it('should return true for a cm with a least 150', () => {
            expect(utils.isValidHeight('150cm')).toBe(true)
        })

        it('should return false for a cm with more than 193', function () {
            expect(utils.isValidHeight('194cm')).toBe(false)
        });

        it('should return true for a cm with eactly 193 or less', function () {
            expect(utils.isValidHeight('193cm')).toBe(true)
            expect(utils.isValidHeight('192cm')).toBe(true)
        });

        it('should return false for an in with less than 59', () => {
            expect(utils.isValidHeight('58in')).toBe(false)
        })

        it('should return true for an in with exactly 59', () => {
            expect(utils.isValidHeight('59in')).toBe(true)
        })

        it('should return false for an in with more than 76', () => {
            expect(utils.isValidHeight('77in')).toBe(false)
        })

        it('should return true for an in with one less than 77', ()=>{
            expect(utils.isValidHeight('76in')).toBe(true)
        })

    })


})

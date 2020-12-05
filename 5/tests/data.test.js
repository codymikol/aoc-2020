import {describe, it} from "@jest/globals";
import {BSP} from "../data.mjs";

describe('BSP', () => {

    let bsp = new BSP('FBFBBFFRLR')

    it('should be able to return the bsp encoded row', () => {
        expect(bsp.getEncodedRow()).toBe('FBFBBFF')
    })

    it('should be able to return the bsp encoded column', () => {
        expect(bsp.getEncodedColumn()).toBe('RLR')
    })

    it('should return the correct row from a BSP', () => {
       expect(bsp.getRow()).toBe(44)
    })

    it('should return the correct column from a BSP', () => {
        expect(bsp.getColumn()).toBe(5)
    })

    it('should be able to get the correct seat ID', () => {
        expect(bsp.getSeatId()).toBe(357)
    })

})

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resistor_color_duo_1 = require("./resistor-color-duo");
describe('Resistor Colors', function () {
    it('Brown and black', function () {
        expect((0, resistor_color_duo_1.decodedValue)(['brown', 'black'])).toEqual(10);
    });
    xit('Blue and grey', function () {
        expect((0, resistor_color_duo_1.decodedValue)(['blue', 'grey'])).toEqual(68);
    });
    xit('White and red', function () {
        expect((0, resistor_color_duo_1.decodedValue)(['white', 'red'])).toEqual(92);
    });
    xit('Yellow and violet', function () {
        expect((0, resistor_color_duo_1.decodedValue)(['yellow', 'violet'])).toEqual(47);
    });
    xit('Orange and orange', function () {
        expect((0, resistor_color_duo_1.decodedValue)(['orange', 'orange'])).toEqual(33);
    });
    xit('Ignore additional colors', function () {
        expect((0, resistor_color_duo_1.decodedValue)(['green', 'brown', 'orange'])).toEqual(51);
    });
    xit('Black and brown, one-digit', function () {
        expect((0, resistor_color_duo_1.decodedValue)(['black', 'brown'])).toEqual(1);
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedValue = void 0;
function decodedValue(resitor_codes) {
    var colors = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9
    };
    return parseInt(colors[resitor_codes[0]] + '' + colors[resitor_codes[1]]);
}
exports.decodedValue = decodedValue;
console.log('Test');
console.log(decodedValue(['brown', 'black']));

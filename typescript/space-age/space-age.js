"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.age = void 0;
var earthYearInSeconds = 31557600;
var orbitalPeriods = new Map([
    ['earth', 1],
    ['mercury', 0.2408467],
    ['venus', 0.61519726],
    ['mars', 1.8808158],
    ['jupiter', 11.862615],
    ['saturn', 29.447498],
    ['uranus', 84.016846],
    ['neptune', 164.79132]
]);
function age(planet, seconds) {
    var calculateEarthWorld = seconds / earthYearInSeconds;
    var result = calculateEarthWorld / (orbitalPeriods.get(planet) || 1);
    return parseFloat(result.toFixed(2));
}
exports.age = age;

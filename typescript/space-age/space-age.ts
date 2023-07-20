const earthYearInSeconds = 31557600;
const orbitalPeriods = new Map<string, number>([
    ['earth', 1],
    ['mercury', 0.2408467],
    ['venus', 0.61519726],
    ['mars', 1.8808158],
    ['jupiter', 11.862615],
    ['saturn', 29.447498],
    ['uranus', 84.016846],
    ['neptune', 164.79132]
]);

export function age(planet: string, seconds: number): number {
    let calculateEarthWorld = seconds / earthYearInSeconds;
    let orbitalPeriod = orbitalPeriods.get(planet);

    if(orbitalPeriod == undefined) {
        throw new Error('Planet not found');
    }

    return parseFloat((calculateEarthWorld / orbitalPeriod).toFixed(2));
}
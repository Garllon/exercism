export function decodedValue(resitor_codes:string[]) {
    const colors : Record<string, number> = {
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
    }

    return parseInt(colors[resitor_codes[0]] + '' + colors[resitor_codes[1]]);
}

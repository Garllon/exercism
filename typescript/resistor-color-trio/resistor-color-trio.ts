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

export function decodedResistorValue(resistor_codes:string[]) {
  let zeros:string       = '0'.repeat(colors[resistor_codes[2]]);
  let main_number:number = parseInt(`${colors[resistor_codes[0]]}${colors[resistor_codes[1]]}${zeros}`)

  return convert_to_human_readable(total_mumber);
}

function convert_to_human_readable(total_number:string) {
  let count = (total_number.match(/0/g) || []).length;

  if(count < 3) {
    return `${total_number} ohms`;
  } else if(count < 6) {
    let sliced_number:string = total_number.slice(0, total_number.length - 3);
    return `${sliced_number} kiloohms`;
  } else if(count < 9) {
    let sliced_number:string = total_number.slice(0, total_number.length - 6);
    return `${sliced_number} megaohms`;
  } else if(count < 12) {
    let sliced_number:string = total_number.slice(0, total_number.length - 9);
    return `${sliced_number} gigaohms`;
  }
}

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

export function isPangram(sentence: string): boolean {
  sentence = sentence.toUpperCase();
  return alphabet.every((letter) => sentence.includes(letter));
}

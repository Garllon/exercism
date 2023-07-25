const TARGET_MAPPING = new Map<number, number>([
  [1, 10],
  [5, 5],
  [10, 1]
]);

export function score(x: number, y: number): number {
    let distance = calculateDistance(x, y);

    if (distance <= 1) {
        return 10;
    } else if (distance <= 5) {
        return 5;
    } else if (distance <= 10) {
        return 1;
    } else {
        return 0;
    }
}

export function calculateDistance(x: number, y: number): number {
  return Math.sqrt((x * x) + (y * y));
}

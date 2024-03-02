function binary_search(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length;

  do {
    const m = Math.floor((low + high) / 2);

    if (arr[m] === target) {
      return m;
    } else if (arr[m] < target) {
      low = m + 1;
    } else {
      high = m;
    }
  } while (low < high);

  return -1;
}

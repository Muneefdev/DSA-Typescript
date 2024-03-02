function binary_search(arr: number[], target: number): number {
  let low = 0;
  let height = arr.length;

  do {
    const m = Math.floor((low + height) / 2);
    if (arr[m] === target) {
      return m;
    } else if (arr[m] < target) {
      low = m + 1;
    } else {
      height = m;
    }
  } while (low < height);

  return -1;
}

/**
 * Bubble sort time complexity
 * Best case O(n)
 * Average case (n^2)
 * worst case (n^2)
 *
 * Bubble sort space complexity O(1)
 */

class BubbleSort {
  constructor() {}

  static sort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          // classic swapping approach
          // let temp = array[i];
          // array[i] = array[j];
          // array[j] = temp;

          //ES6 destructuring approach
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    }
    return array;
  }
}

console.log(BubbleSort.sort([99, 100, 3, 2, 6, 1])); // [ 1, 2, 3, 6, 99, 100 ]

// ****************************************************************
// Optimized version
// ****************************************************************
function Bubble(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

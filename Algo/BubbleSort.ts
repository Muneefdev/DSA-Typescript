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

	sort(array: number[]) {
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

const bs = new BubbleSort();
console.log(bs.sort([99, 100, 3, 2, 6, 1])); // [ 1, 2, 3, 6, 99, 100 ]

/**
 * Selection sort time complexity
 * Best case O(n)
 * Average case (n^2)
 * worst case (n^2)
 *
 * Selection sort space complexity O(1)
 */

class SelectionSort {
	constructor() {}

	static sort(array: number[]) {
		for (let i = 0; i < array.length; i++) {
			/**
			 *  we assume that the first element is the smallest
			 * to do the comparison, its index should be taken only
			 */
			let smallest: number = i;

			for (let j = i + 1; j < array.length; j++) {
				if (array[j] < array[smallest]) {
					smallest = j;
				}
			}
			//ES6 swapping approach
			[array[i], array[smallest]] = [array[smallest], array[i]];
		}

		return array;
	}
}

console.log(SelectionSort.sort([100, 5, 1, 4, 66, 2, 88])); // [ 1, 2, 4, 5, 66, 88, 100 ]

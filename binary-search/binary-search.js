'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let startIdx = 0;
	let endIdx = array.length-1;
	let middleIdx = Math.floor((array.length-1)/2);
	while (true && startIdx <= endIdx) {
		if (array[middleIdx]===target){
			return true;
		} else if (array[middleIdx] < target) {
			startIdx = middleIdx+1;
			middleIdx = Math.floor((startIdx+endIdx)/2);
		} else {
			endIdx = middleIdx-1;
			middleIdx = Math.floor((startIdx+endIdx)/2);
		}
	} return false;
};
[1,3,5,7,8,11,12,14] //6

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

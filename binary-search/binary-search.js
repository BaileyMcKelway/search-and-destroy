'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  const middle = Math.floor(array.length / 2);
  if (target === array[middle]) {
    return true;
  }
  if (array.length <= 1) {
    return false;
  }

  if (target > array[middle]) {
    return binarySearch(array.slice(middle), target);
  } else {
    return binarySearch(array.slice(0, middle), target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;

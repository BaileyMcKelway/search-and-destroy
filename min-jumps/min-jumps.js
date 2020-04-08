'use strict';

// Complete this algo
const minJumps = (arr, counter = 1) => {
  if (arr[0] >= arr.length - 1) {
    return counter;
  }

  let currentPostionValue = arr[0];

  // temp array = startArray.slice(currentPosition)
  let tempArray = arr.slice(1, currentPostionValue + 1);

  // find max value
  let maxValue = Math.max(...tempArray);
  counter = counter + 1;

  return minJumps(arr.slice(tempArray.indexOf(maxValue) + 1), counter);
};

module.exports = minJumps;

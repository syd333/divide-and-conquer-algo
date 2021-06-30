function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    // let currentElement = array[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// [1,2,3,5,6,8,9,12,15,16,29]
// split array in middle 
// middle is 8 - 
// value we want is 15 
// is 15 greater than 8 // yes
// ignore first half of array
// look at subarray to right of array 


// ** TIME COMPLEXITY Log(N) - BINARY SEARCH
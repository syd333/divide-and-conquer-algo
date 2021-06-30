
function search (arr, value) {
    for (let i =0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// ** LINEAR SEARCH
// ** TIME COMPLEXITY O(N)
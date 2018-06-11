function bubbleSort(arr) {

  let limit = arr.length;

  while (limit--) {
    for (let i = 0, j = 1; i < arr.length; i++, j++) {
      if (arr[i] > arr[j]) {
        arr = swap(arr, i, j);
      }
    }
  }
  return arr;
}


function swap(arr, i, j) {
  let temp;
  temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  return arr;
}

// let arr = [9, 8, 3, 2];
// console.log(bubbleSort(arr));

// Look at the first item
// Compare to second item
// If first item

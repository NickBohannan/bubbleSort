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

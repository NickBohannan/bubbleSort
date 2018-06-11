function split(wholeArray) {
  const middle = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, middle);
  const secondHalf = wholeArray.slice(middle);

  return [firstHalf, secondHalf];
}

// combining sorted arrays into a single sorted array.
function merge(firstHalf, secondHalf) {
  return [...firstHalf, ...secondHalf];
}

// recursive mergeSort function.
function mergeSort(array) {
  /* your code here */
}

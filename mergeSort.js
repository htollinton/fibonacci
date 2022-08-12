function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let copyFirst = [...array].splice(0, Math.floor(array.length / 2));
    let copySecond = [...array].splice(Math.floor(array.length / 2));

    return merge(mergeSort(copyFirst), mergeSort(copySecond));
  }
}
function merge(first, second) {
  let sortedArray = [];
  let a = 0;
  let b = 0;

  while (a < first.length && b < second.length) {
    if (first[a] <= second[b]) {
      sortedArray.push(first[a]);
      a++;
    } else {
      sortedArray.push(second[b]);
      b++;
    }
  }

  while (a < first.length) {
    sortedArray.push(first[a]);
    a++;
  }

  while (b < second.length) {
    sortedArray.push(second[b]);
    b++;
  }
  return sortedArray;
}
console.log(mergeSort([3, 2, 1, 100, 77, 77, 3.14, -1]));

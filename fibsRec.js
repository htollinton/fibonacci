function fibsRec(n, array = [0, 1]) {
  if (array.length < n) {
    array.push(array[array.length - 2] + array[array.length - 1]);
    return fibsRec(n, array);
  } else return array;
}
console.log(fibsRec(3));
console.log(fibsRec(10));

function fib(n) {
  const array = [];
  for (i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      array.push(i);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array;
}
console.log(fib(10));

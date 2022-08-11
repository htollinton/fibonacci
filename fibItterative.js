function fib(n) {
  if (!Number.isInteger(n) || n <= 0) {
    return 'Please enter a positive whole number';
  }
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
console.log(fib(-5));
console.log(fib(1.8));
console.log(fib('hello'));
console.log(fib(22));

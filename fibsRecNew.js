function fibsRecNew(n) {
  return n < 2 ? n : fibsRecNew(n - 1) + fibsRecNew(n - 2);
}
console.log(fibsRec(100));

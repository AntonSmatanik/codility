function frogJmp(X, Y, D) {
  return Math.ceil((Y - X) / D);
}

console.log(frogJmp(10, 85, 30)); // 3
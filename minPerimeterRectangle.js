function minPerimeterRectangle(N) {
  const M = Math.sqrt(N);
  let minPerimeter = 2 * (1 + N);

  for (i = 2; i <= M; i++) {
    if (N % i === 0) {
      minPerimeter = Math.min(minPerimeter, 2 * (i + N / i));
    }
  }

  return minPerimeter;
}

console.log(minPerimeterRectangle(30)); // 22
console.log(minPerimeterRectangle(36)); // 24
console.log(minPerimeterRectangle(1)); // 4
console.log(minPerimeterRectangle(2)); // 6
console.log(minPerimeterRectangle(3)); // 8
console.log(minPerimeterRectangle(4)); // 8

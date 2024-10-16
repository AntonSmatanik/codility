function nesting(A) {
  const N = A.length;
  let counter = 0;

  for (let i = 0; i < N; i++) {
    if (A[i] === "(") {
      counter++;
    } else {
      counter--;
    }

    if (counter < 0) {
      return 0;
    }
  }

  return counter === 0 ? 1 : 0;
}

console.log(nesting("(()(())())")); // 1
console.log(nesting("())")); // 0
console.log(nesting("")); // 1
console.log(nesting("(")); // 0
console.log(nesting(")")); // 0
console.log(nesting("((")); // 0

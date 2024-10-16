function countNonDivisible(A) {
  const N = A.length;
  const C = new Array(N).fill(0);
  const T = new Map();

  for (let i = 0; i < N; i++) {
    if (!T.get(A[i])) {
      //  all the elements that are greater than A[i] in the array
      T.set(A[i], A.filter((value) => value > A[i]).length);

      //  all the elements that are less than A[i] in the array
      const lower = A.filter((value) => value < A[i]);
      const M = lower.length;

      for (let j = 0; j < M; j++) {
        if (A[i] % lower[j] !== 0) {
          T.set(A[i], T.get(A[i]) + 1);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    C[i] = T.get(A[i]);
  }

  return C;
}

// console.log(countNonDivisible([3, 1, 2, 3, 6])); // [2, 4, 3, 2, 0]
// console.log(countNonDivisible([3, 1, 2, 3, 6, 7])); // [3, 5, 4, 3, 1, 4]

performance.mark("A");

for (let i = 0; i < 50000; i++) {
  countNonDivisible([
    3, 1, 2, 3, 6, 7, 8, 9, 10, 112, 555, 11, 9999, 12, 13, 14, 15, 16, 17, 18, 19, 29,
  ]);
}

performance.mark("B");
performance.measure("A to B", "A", "B");
const measure = performance.getEntriesByName("A to B");

console.log(measure[0].duration);

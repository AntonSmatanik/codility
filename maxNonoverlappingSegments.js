const maxNonoverlappingSegments = (A, B) => {
  const N = A.length;

  if (N === 0) {
    return 0;
  }

  let count = N;
  let right = B[0];

  for (let i = 0; i < N - 1; i++) {
    if (A[i + 1] <= right) {
      count--;
    } else {
      right = B[i + 1];
    }
  }

  // let count = 1;
  // let right = B[0];

  // for (let i = 1; i < N; i++) {
  //   if (A[i] > right) {
  //     count++;
  //     right = B[i];
  //   }
  // }

  return count;
};

console.log(maxNonoverlappingSegments([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])); // 3
console.log(maxNonoverlappingSegments([1, 3, 7, 19, 19], [2, 6, 8, 19, 20])); // 4
console.log(maxNonoverlappingSegments([1, 3, 7, 19, 20], [2, 6, 8, 19, 20])); // 5
console.log(maxNonoverlappingSegments([1, 3, 7, 19, 20], [3, 6, 8, 19, 20])); // 4
console.log(maxNonoverlappingSegments([1, 3, 7, 19, 20], [3, 3, 19, 19, 20])); // 3
console.log(maxNonoverlappingSegments([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])); // 1
console.log(maxNonoverlappingSegments([0, 2, 6, 8, 8], [5, 6, 8, 9, 10])); // 2

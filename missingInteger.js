function missingInteger(A) {
  // const deduped = [...new Set(A.sort((a, b) => a - b))];
  // const max = Math.max(...deduped);

  // if (max < 1) {
  //     return 1;
  // }

  // const N = deduped.length;
  // let j = 1;

  // for (let i = 0; i < N; i++) {
  //     if (deduped[i] > 0) {
  //         if (deduped[i] !== j) {
  //             return j;
  //         }

  //         j++;
  //     }
  // }

  // return deduped[N - 1] + 1;

  const deduped = new Set(A.filter((v) => v > 0).sort((a, b) => a - b));
  const N = deduped.size;

  if (N === 0) {
    return 1;
  }

  for (let i = 1; i <= N; i++) {
    if (!deduped.has(i)) {
      return i;
    }
  }

  return N + 1;
}

console.log(missingInteger([1, 3, 6, 4, 1, 2])); // 5
console.log(missingInteger([1, 2, 3])); // 4
console.log(missingInteger([-1, -3])); // 1
console.log(missingInteger([1, 2, 3, 4, 5])); // 6
console.log(missingInteger([1])); // 2
console.log(missingInteger([0])); // 1
console.log(missingInteger([-1])); // 1
console.log(missingInteger([-1, 0, 1])); // 2
console.log(missingInteger([-1, 0, 1, 3])); // 2
console.log(missingInteger([-1, 0, 2])); // 1
console.log(
  missingInteger([
    96, 59, 174, 168, 48, 93, 87, 90, 11, 67, 145, 162, 125, 54, 3, 40, 186, 80,
    157, 159, 127, 86, 52, 84, 120, 42, 8, 163, 131, 144, 58, 183, 83, 99, 10,
    98, 24, 43, 55, 115, 60, 64, 27, 177, 151, 51, 45, 104, 53, 181, 41, 192,
    18, 193, 91, 36, 196, 56, 77, 78, 50, 12, 165, 74, 30, 153, 176, 14, 188,
    95, 118, 198, 39, 152, 140, 146, 171, 185, 199, 135, 111, 20, 189, 32, 170,
    119, 16, 7, 79, 149, 57, 100, 169, 49, 70, 82, 69, 129, 117, 65, 76, 4, 148,
    187, 25, 182, 47, 194, 97, 116, 92, 37, 150, 178, 72, 155, 161, 179, 31,
    110, 130, 184, 28, 63, 147, 200, 35, 105, 21, 13, 128, 139, 68, 22, 126,
    175, 29, 5, 113, 112, 19, 94, 195, 107, 66, 137, 23, 132, 6, 114, 180, 81,
    136, 2, 73, 197, 156, 17, 164, 103, 138, 166, 121, 143, 158, 160, 190, 172,
    102, 1, 46, 191, 62, 109, 44, 9, 133, 141, 122, 75, 71, 106, 142, 173, 85,
    167, 26, 0, 154, 108, 33, 15, 61, 38, 124, 89, 88, 123, 134, 34,
  ])
); // 101

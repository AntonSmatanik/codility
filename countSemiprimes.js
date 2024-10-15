const countSemiprimes = (N, P, Q) => {
  const M = P.length;
  const result = Array(M).fill(0);

  if (N < 2) {
    return result;
  }

  const isPrime = (num) => {
    if (num % 2 === 0) {
      return false;
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const primes = new Set([2]);

  for (let i = 3; i <= N; i++) {
    if (isPrime(i)) {
      primes.add(i);
    }
  }

  const slicesChache = new Map();
  const semiprimesCache = new Map();

  for (let i = 0; i < M; i++) {
    const start = P[i];
    const end = Q[i];

    if (slicesChache.has(`${start}-${end}`)) {
      result[i] = slicesChache.get(`${start}-${end}`);
      continue;
    }

    let semiprimesCount = 0;

    for (let j = start; j <= end; j++) {
      if (j < 4) {
        continue;
      }

      if (semiprimesCache.has(j)) {
        semiprimesCount++;
        continue;
      }

      for (const prime of primes) {
        if (j % prime === 0 && primes.has(j / prime)) {
          semiprimesCache.set(j, true);
          semiprimesCount++;
          break;
        }
      }
    }

    slicesChache.set(`${start}-${end}`, semiprimesCount);
    result[i] = semiprimesCount;
  }

  return result;
};

// performance.mark("A");

// for (let i = 0; i < 50000; i++) {
//   countSemiprimes(
//     26,
//     [
//       1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1,
//       4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4,
//       16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16,
//       1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1,
//       4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4,
//       16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16,
//       1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1,
//       4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16, 1, 4, 16,
//     ],
//     [
//       26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10,
//       20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26,
//       10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20,
//       26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10,
//       20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26,
//       10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20,
//       26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10, 20, 26, 10,
//       20,
//     ]
//   );
// }

// performance.mark("B");
// performance.measure("A to B", "A", "B");

// console.log(performance.getEntriesByName("A to B")[0].duration);

console.log(
  countSemiprimes(26, [1, 4, 16, 1, 4, 16, 1, 4, 16], [26, 10, 20, 26, 10, 20, 26, 10, 20])
); // [10, 4, 0, 10, 4, 0, 10, 4, 0]
console.log(countSemiprimes(1, [1], [1])); // [0]
console.log(countSemiprimes(2, [1], [1])); // [0]
console.log(countSemiprimes(2, [1], [2])); // [0]
console.log(countSemiprimes(2, [2], [2])); // [0]

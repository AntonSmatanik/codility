const countSemiprimes = (N, P, Q) => {
  const M = P.length;

  if (N < 2) {
    return Array(M).fill(0);
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

  const result = [];

  for (let i = 0; i < M; i++) {
    let semiprimesCount = 0;
    const start = P[i];
    const end = Q[i];

    for (let j = start; j <= end; j++) {
      if (j < 4) {
        continue;
      }

      for (const prime of primes) {
        if (j % prime === 0 && primes.has(j / prime)) {
          semiprimesCount++;
          break;
        }
      }
    }

    result.push(semiprimesCount);
  }

  return result;
};

console.log(countSemiprimes(26, [1, 4, 16], [26, 10, 20])); // [10, 4, 0]
console.log(countSemiprimes(1, [1], [1])); // [0]
console.log(countSemiprimes(2, [1], [1])); // [0]
console.log(countSemiprimes(2, [1], [2])); // [0]
console.log(countSemiprimes(2, [2], [2])); // [0]

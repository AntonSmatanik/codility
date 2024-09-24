function brackets(S) {
    if (S[0] === ']' || S[0] ===  '}' || S[0] ===  ')') {
        return 0;
    }

    const B = [];
    const M = S.length;

    for (let i=0; i<M; i++) {
        if (S[i] === ']' && B[B.length-1] === '[') {
            B.pop();
        } else if (S[i] === '}' && B[B.length-1] === '{') {
            B.pop();
        } else if (S[i] === ')' && B[B.length-1] === '(') {
            B.pop();
        } else {
            B.push(S[i]);
        }
    }
 
    return B.length === 0 ? 1 : 0;
}

console.log(brackets('{[()()]}')); // 1
console.log(brackets('([)()]')); // 0
console.log(brackets('()')); // 1
console.log(brackets('')); // 1
console.log(brackets(']')); // 0
console.log(brackets(')')); // 0
console.log(brackets('}')); // 0
console.log(brackets('((')); // 0
console.log(brackets('))')); // 0
function calc(a, b, action) {
    let result
    if (action == '+') {
        result = a + b;
    } else if (action == '-') {
        result = a - b;
    } else if (action == '*') {
        result = a * b;
    }
    return result;

}

console.log(calc(5, 7, '+'));
console.log(calc(5, 7, '-'));
console.log(calc(5, 7, '*'));
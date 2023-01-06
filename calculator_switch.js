function calc(a, b, action) {

    let result;
    switch (action) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
    }
    return result;
}
console.log(calc(5, 7, '+'));
console.log(calc(5, 7, '-'));
console.log(calc(5, 7, '*'));
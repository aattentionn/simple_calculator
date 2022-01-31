function Calc(operator, num1, num2){

  if (typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'Error';
}

let operations = {
  sum: num1+num2,
  sub: num1-num2,
  multi: num1*num2,
  div: num1/num2,
  '': 'Unknown operation',
}

return operations[operator];

}
console.log(Calc('multi', 2, 5));
console.log(Calc('', 2, 5));
console.log(Calc('div', 2, 5));
console.log(Calc('sum', 2, 5));
console.log(Calc('sub', 2, 5));
console.log(Calc('div', "hi", 1));
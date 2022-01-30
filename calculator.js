function Calc(operator, num1, num2){

    let result;
  
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        result = 'Error';
    }    
    else if (operator === 'sum'){
        result = num1+num2;
    } 
    else if (operator === 'sub'){
        result = num1-num2;
    }
    else if (operator === 'multi'){
        result = num1 * num2;
    }
    else if (operator === 'div'){
        result = num1/num2;
    }
    else {
      result = 'Unknown operation';
    }
    return result;
  }
  
  console.log(Calc('multi', 2, 5));
  console.log(Calc('', 2, 5));
  console.log(Calc('div', 2, 5));
  console.log(Calc('sum', 2, 5));
  console.log(Calc('sub', 2, 5));

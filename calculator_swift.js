function Calc(operator, num1, num2){

    let result;
  
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        result = 'Error';
    }
  
    switch (operator){
        
    case 'sum':
        result = num1+num2;
        break;
    
    case 'sub':
        result = num1-num2;
        break;
    
    case 'multi':
        result = num1 * num2;
        break;
    
    case 'div':
        result = num1/num2;
        break;
    
    case '':
      result = 'Unknown operation';
      break;
  }
    return result;
  }
  
  
  console.log(Calc('multi', 2, 5));
  console.log(Calc('', 2, 5));
  console.log(Calc('div', 2, 5));
  console.log(Calc('sum', 2, 5));
  console.log(Calc('sub', 2, 5));
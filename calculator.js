//if else solution

function Calc(operator, num1, num2){
    
  let result;
  const isNotValid = (typeof num1 !== 'number' || typeof num2 !== 'number')
    if (isNotValid){
      result = 'Error';
    }
    else if (operator == '+'){
        result = num1+num2;
    } 
    else if (operator == '-'){
        result = num1-num2;
    } 
    else if (operator == '*'){
        result = num1*num2;
    } 
    else if (operator == '/'){
      result = num1/num2;
    } else {
      result = 'Unknown operation';
    }
  return result;
    }
    
    console.log(Calc('/', 9, 3));


//switch case solution


function Calc(operator, num1, num2){
  
  let result;

    switch (operator){
  
        case '+':
            return num1+num2;

        case '-':
            return num1-num2;

        case '*':
            return num1*num2;

        case '/':
            return num1/num2;

        case (typeof num1 !== 'number' || typeof num !== 'number'):
                return 'Error';
      
      default:
        return 'Unknown operation';

    }
    return result;
}
    console.log(Calc('/', 3, 5));

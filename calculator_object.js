function Calc(operator, num1, num2) {

    let isNotValid = (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof operator !== 'undefined')
    if (isNotValid){
      return 'Error';
    }

    let operations = {
        sum: 'num1 + num2',
        sub: 'num1 - num2',
        multi: 'num * num2',
        div: 'num1 / num2',
      };

      alert(operations[operator]);
    


}

console.log(Calc('sum', 9, 3));


















let operations = {
    sum: 'num1+num2',
    sub: 'num1-num2',
    multi: 'num*num2',
    div: 'num1/num2',

}
num1=2;
num2=3;

let result = prompt('Which operation should I do?', 'sum', 'sub', 'multi', 'div');

alert(operations[result]);


function Calc(num1, num2) {
    return {
      num1 = 2;
      num2 = 4;
    };

    let operations = {
        sum: 'num1+num2',
        sub: 'num1-num2',
        multi: 'num*num2',
        div: 'num1/num2',
    
    }
}
    let result = prompt('Which operation should I do?', 'sum', 'sub', 'multi', 'div');

alert(operations[result]);

let result = prompt('Which operation should I do?', 'sum', 'sub', 'multi', 'div')

  let operations = {

    sum: 'num1 + num2',
    sub: 'num1 - num2',
    multi: 'num * num2',
    div: 'num1 / num2',
  
  }


alert(operations[sum]);















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




    let result;
    
    const isNotValid = (typeof num1 !== 'number' || typeof num2 !== 'number')
    if (isNotValid){
      result = 'Error';
    }

    let operations = {

        sum: 'num1 + num2',
        sub: 'num1 - num2',
        multi: 'num * num2',
        div: 'num1 / num2',
      
      }

      return 'Unknown operation'

      console.log(Calc('sum', 9, 3));


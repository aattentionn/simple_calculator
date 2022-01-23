//if else solution

function calc(operator, num1, num2){

    if (num1 === undefined || num2 === undefined){
      alert('Error');
    }
    else if (operator == '+'){
        return num1+num2;
    } 
    else if (operator == '-'){
        return num1-num2;
    } 
    else if (operator == '*'){
        return num1*num2;
    } 
    else {
      return num1/num2;
    } 
    }
    
    console.log(calc('/', 3, 4));

//switch solution

    function calc(operator, num1, num2){

    switch (operator){
  
        case '+':
            return num1+num2;

        case '-':
            return num1-num2;
        
        case '*':
            return num1*num2;
    
        case '/':
            return num1/num2;
    
        case (num1 === undefined || num2 === undefined):
                alert('Error');
                
    }
}
    console.log(calc('+', 3, 5));
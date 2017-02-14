var result;

function doMath(number1, number2, operator){
    switch(operator){
        case "add":
            result = number1 + number2;
            break;
        case "subtract":
            result = number1 - number2;
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            result = number1 / number2;
            break;
        case "modulo":
            result = number1 % number2;
            break;
        default:
            alert("please put in an operator");
            break;
    }
    return result;
}

alert(doMath(55, 88 , "multiply"));
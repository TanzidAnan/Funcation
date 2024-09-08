const jim =54;
const kim =65;
const tim =32;

function getMax(num1, num2, num3){
    if(num1> num2 && num1 >num3){
        return('number one win',num1)
    }
    else if(num2> num1 && num2 > num3){
       return('number two win',num2)
    }
    else{
        return('number three win',num3)
    }
}

const maxNumber =getMax(54, 65, 12);
console.log(maxNumber)
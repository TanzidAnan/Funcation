function add(num1, num2) {
    return num1 + num2
}
function subStrat(num1, num2) {
    return num1 - num2;
}
function multiple(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2
}

function calculter(a, b, opertator) {
    if (opertator === 'add') {
        const result = add(a, b);
        return result;
    }
    else if(opertator ==='subStrat'){
        const result =subStrat(a,b);
        return result;
    }
    else if(opertator === 'multiple'){
        const result = multiple(a,b);
        return result;
    }
    else if(opertator ==='divide'){
        const result =divide(a,b);
        return result
    }
    else{
        return 'operator no'
    }
}

const result = calculter(1, 5 ,'add');
console.log(result)
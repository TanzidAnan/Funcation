function calculaterMoney(tickeSale) {
    if(tickeSale <0 ||typeof tickeSale !== 'number'){
        return "Invelid Number";
    }
    let reamingAmount = tickeSale * 120 - (500 + 8 * 50);
    return reamingAmount
}

console.log(calculaterMoney(10))
console.log(calculaterMoney(1055))
console.log(calculaterMoney(93))
console.log(calculaterMoney(-130))
console.log(calculaterMoney('sjksld'))
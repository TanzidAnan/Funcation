function montlyAmount(arr ,liveCose){
    if(Array.isArray(arr) ===false || typeof liveCose !=='number'){
        return 'invlet input'
    }
    let totleIncome =0
    for(let paymet of arr){
        if(paymet >= 3000){
            let text = paymet*0.2;
            totleIncome +=paymet-text
        }
        else{
            totleIncome+=paymet;
        }

    }
    let saving =totleIncome-liveCose;
    if(saving >= 0){
        return saving
    }
    else{
        return 'seving more'
    }
}

console.log(montlyAmount([1000,2000,3000],5400))
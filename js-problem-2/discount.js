function discountPrice(queatity){
    if(queatity <=100){
        const total = queatity*100;
        return total
    }
    else if(queatity <=200){
        const total =queatity*90;
        return total
    }
    else{
        const total =queatity*70;
        return total
    }
}

const total =discountPrice(200);
console.log(total);
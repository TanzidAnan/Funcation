function sumOfNumber(numbers){
    let sum =0
    for(const number of numbers){
       sum =sum + number;
    }
    return sum;

    

}

const numbs =[25, 36, 47, 52, 45, 36, 89, 41, 25]

const sum = sumOfNumber(numbs);
console.log( 'sum of Number is: ',sum);
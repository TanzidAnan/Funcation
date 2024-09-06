function evenNumberOnly(numbers){
    const event =[]
    for(const number of numbers){
        // console.log(number)
        if(number % 2 ===0){
            // console.log(number);
            event.push(number);
        }
        
    }
    return event
}

const numbers =[20, 31, 42, 51, 62, 71, 82, 90];
// const events = evenNumberOnly(numbers);
// console.log(events)


function sumOfNumbers(numbers){
    let sum =0
    for(const number of numbers){
        
        if(number %2 === 0){
            // console.log(number);
            sum =sum +number;
        }
        
    }
    return sum;
    
}

const sum = sumOfNumbers(numbers);
console.log("sum of the numbers is: ",sum);
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
const events = evenNumberOnly(numbers);
console.log(events)
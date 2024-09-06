function oddAvarage(numbers) {
    const odds =[]
    for(const number of numbers){
        if(number %2 ===1){
            // console.log(number)
            odds.push(number)
        }
    }
    let sum =0;
    for(const number of odds){
        sum =sum +number;
        
    }
    const count =odds.length; 
    console.log(sum ,count);
    const avg = sum /count;
    return avg

}

const numbers = [25, 36, 45, 36, 45, 25, 78, 36, 52, 11];
const avg = oddAvarage(numbers);
console.log('odd of the numbers is:  ',avg)
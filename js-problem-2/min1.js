const prices = [50000, 14000, 30000, 45000, 70000, 36000, 1000000];
function getMin(numbers){
    let min =numbers[0];
    for(const item of numbers){
        if(item < min){
            min = item
        }
    }
    return min
}

const min =getMin(prices);
console.log(min)
function getMax(numbers) {
    // console.log(numbers)
    let max =numbers[0];
    for (const number of numbers) {
        if(number <max){
            max =number
        }
    }
    return max
}

const hight = [54, 32, 85, 45, 65, 75, 36, 55];
const max = getMax(hight);
console.log('max number', max)
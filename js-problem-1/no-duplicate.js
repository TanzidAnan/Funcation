const biryanKhor =['abul', 'babule', 'dabule', 'abul', 'babule', 'cabule', 'nabule', 'dabule'];

const numbers = [12, 12, 22, 22, 35, 35, 45, 63, 45, 78, 36, 22, 45,35];

function noDuplicate(array){
    let unicqec =[];
    for(const item of array){
        if(unicqec.includes(item) === false){
            unicqec.push(item);
        }
    }
    return unicqec
}

const uniqueArray =noDuplicate(biryanKhor);
// console.log(uniqueArray);
   


function noDublickNum(numbers){
    console.log(numbers);
    let unick =[];
    for(const number of numbers){
        // console.log(number)
        if(unick.includes(number) ===false){
            unick.push(number)
        }
    }
    return unick;
}

const arrayNumber = noDublickNum(numbers);
console.log(arrayNumber)
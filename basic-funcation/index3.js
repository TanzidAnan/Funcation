function deleteInveleat(array) {
    if(!Array.isArray(array)){
        return 'Invelt Number'
    }
    let numberArray = [];
    for (let element of array) {
        // console.log(element)
        if (typeof element === 'number' && isNaN(element) === false) {
            // console.log(element)
            numberArray.push(element)
        }
    }
    return numberArray
}
console.log(deleteInveleat([1, null, undefined, 121, NaN, 545, -4545, -87]));
console.log(deleteInveleat([1, null, undefined, 121, NaN, 545, -4545, -87, 12, null]));
console.log(deleteInveleat([null, undefined, NaN]))
console.log(deleteInveleat({ num: [1, 2, 3] }))
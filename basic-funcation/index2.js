function chechName(name) {
    if(typeof name !== 'string'){
        return "invalid"
    }
    // let lastName =name.slice(-1).toLowerCase();
    let lastName = name[name.length - 1].toLowerCase();
    // console.log(lastName)
    let result = false;
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    for (let check of checkArray) {
        // console.log(check)
        if (check === lastName) {
            result = true
        }
    }
    return result ? 'Good Name' : 'bad Name'
}

console.log(chechName('salman'));
console.log(chechName('RAEE'));
console.log(chechName('jhankar'));
console.log(chechName(566));
console.log(chechName(["tanizd"]));
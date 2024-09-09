function checkName(name) {
    if(typeof name !== 'string'){
        return "Invit"
    }
    let lastName = name[name.length - 1].toLowerCase();
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    let result= checkArray.includes(lastName)
    return result
}

console.log(checkName('salman'));
console.log(checkName('RAEE'));
console.log(checkName('jhankar'));
console.log(checkName(41));
console.log(checkName(["tan"]));
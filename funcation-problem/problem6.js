const person1 = {
    name: 'Tanzid',
    honors: 40,
    hsc: 30,
    isFfFamali: true,
}
const person2 = {
    name: 'marzan',
    honors: 40,
    hsc: 30,
    isFfFamali: false
}

function jobSelection(info) {
    if (typeof info !== 'object') {
        return 'invlet object'
    }
    let totleMark = info.honors + info.hsc;
    if (info.isFfFamali) {
        totleMark = totleMark + (totleMark * 0.2);
        
    }
    if (totleMark >= 80) {
        return 'You got the job'
    }
    else {
        return "you fild"
    }
}

console.log(jobSelection(person1))
console.log(jobSelection(person2))

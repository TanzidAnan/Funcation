const x = [21, true, null, 'tanzid', false, { name: 'anan' }, 421, undefined,true];

function countBoolent(array) {
    // Boolean
    if (!Array.isArray(array)) {
        return 'enter array';
    }
    let count = 0;
    for (let item of array) {
        if (typeof item === 'boolean') {
            count++;
        }
    }
    return count;

}

console.log(countBoolent(x))
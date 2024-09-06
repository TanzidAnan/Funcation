function eventSizedString(str){
    const size =str.length;
    // console.log(size)
    console.log(str,size)
    if(size % 2 ===0){
        console.log('event Number:',str,size);
        return true
    }
    else{
        console.log('odd Number:',str,size);
        return false
    }
}
// eventSizedString('Dhaka')
// eventSizedString('faka')


function doubleOrTriple(number,doDouble){
    if(doDouble){
        const result =number * 2;
        return result;
    }
    else{
        const result =number* 3;
        return result
    }
}

console.log(doubleOrTriple(5,true));
console.log(doubleOrTriple(5,false));
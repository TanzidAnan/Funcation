function eventSizedString(str){
    const size =str.length;
    // console.log(size)
    console.log(str,size)
    if(size % 2 ===0){
        console.log('event Number:',str,size)
    }
    else{
        console.log('odd Number:',str,size)
    }
}
eventSizedString('Dhaka')
eventSizedString('faka')
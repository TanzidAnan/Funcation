
function emailData(info){
    if(info.name ===undefined|| info.address ===undefined){
        return 'Invlet'
    }
    const pass =info.name + '@' + info.address+'.com';
    return pass
}


const person={
    name: 'tanzid',
    address: 'Dhaka',
    p:545
}
const data= [54163,'asl']
console.log(emailData(person))
console.log(emailData(data))
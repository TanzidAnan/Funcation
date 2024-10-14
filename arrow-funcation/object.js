const obj ={
    name:'Hello',
    age:30
}
const obj2 ={...obj};
obj2.address ='Dhaka';
const {age,...rest} =obj;
console.log(rest)
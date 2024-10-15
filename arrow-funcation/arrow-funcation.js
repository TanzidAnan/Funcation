const adds = (x, y, colback) => {
    console.log('Hello');
    console.log(typeof colback);
    colback(x, y)
};
const time = (x, y) => {
    console.log(x + y)
    return x = y;
}
// adds(5,6,time)

const numbers = [20, 30, 65, 96, 45, 85, 69];

const number1 =[...numbers];
number1.push(21,52,85);
console.log(number1);
console.log(numbers)

for(let i=0 ; i<numbers.length; i++){
    const number =numbers[i]*2
    // console.log(number)
};

const person ={
    name:'Tanzid',
    age:20,
    address:'Barisal',
    isTime:true
}
console.log(person['age']);

console.log(`My name ${person.name},My age ${person.age}`);
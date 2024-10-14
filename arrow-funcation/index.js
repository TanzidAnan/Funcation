const addFast =(x) =>{
    console.log(x)
}
// addFast(30);

const person ={
    name:'tanzid',
    age:20,
    isStudent:true,
    address:'Dhaka'

}
console.log(person?.address ||"N/A")

console.log(person.isStudent && 'Not a Student')
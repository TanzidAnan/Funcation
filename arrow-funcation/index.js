const addFast = (x) => {
    console.log(x)
}
// addFast(30);

const person = {
    name: 'tanzid',
    age: 20,
    isStudent: true,
    address: 'Dhaka'

}
console.log(person?.address || "N/A")

console.log(person.isStudent && 'Not a Student');

const num = [12, 65, 32, 46, 97, 46, 36, 45, 65, 44, 36, 47, 36, 74, 96, 41, 85, 11];

const [x,y,...z] =num;
console.log(x,y);
console.log(z)
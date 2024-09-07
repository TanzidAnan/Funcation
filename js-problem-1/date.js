const today =new Date();
const date =new Date('2052-10-29');
console.log(date.getMonth());
console.log(date.getDay());
const specificData =new Date(2091, 0, 26);
console.log(specificData);
specificData.setMonth(10);
console.log(specificData.toLocaleString('en-GB'))
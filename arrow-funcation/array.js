const number = [12, 42, 36, 36, 41, 35,];
const arr = number.reduce((previous, current) => {
   const totle =(previous + current);
   console.log(totle)
   return totle
}, 0);
console.log(arr)
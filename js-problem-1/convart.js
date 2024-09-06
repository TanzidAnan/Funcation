function inchToFeet(inct){
    const feet = inct / 12;
    return feet;
}

const tanzidHight =inchToFeet(78);
// console.log(tanzidHight);



function inchTofeet1(inct){
    const feetFecation =inct / 12;
    const feetNumber =parseInt(feetFecation);
    const feetReamaining = inct % 12;
    const totle =feetNumber + 'ft ' + feetReamaining + 'inct ';
    return totle;
}

const feet =inchTofeet1(75);
// console.log(feet)




function mileToKilomater (mile){
    const kilo =mile * 1.60934;
    return kilo
}

const mail =mileToKilomater(12);
console.log(mail)
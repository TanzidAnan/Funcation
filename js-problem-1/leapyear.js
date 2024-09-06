function isleaper(year){
    if(year %4 === 0){
        return true
    }
    else{
        return false
    }
}

const isleaper1 =isleaper(2008);
// console.log(isleaper1)


function isLeapYear(year){
    if(year % 100 !==0 && year %4 ===0){
        return true
    }
    else if(year % 400 === 0 && year % 100 ===0){
        return true;
    }
    else{
        return false;

        
    }
}

const isLeap =isLeapYear(2100);
console.log(isLeap)
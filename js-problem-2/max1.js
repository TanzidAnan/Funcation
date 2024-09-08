function getMex(num1, num2){
    if(num1> num2){
        return num1
    }
    else{
        return num2;
    }
}

const max1 = getMex(95, 69);
const max2 = getMex(45, 94);
const ultimax =getMex(max1, max2)
console.log("get naumber of :", ultimax)
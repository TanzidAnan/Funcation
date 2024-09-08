const mobile = [
    { name: 'samsung', pirce: 20000, camar: '12mp', color: 'black' },
    { name: 'xoami', pirce: 15000, camar: '15mp', color: 'whate' },
    { name: 'apple', pirce: 200000, camar: '30mp', color: 'black' },
    { name: 'oppo', pirce: 10000, camar: '50mp', color: 'black' },
    { name: 'realmi', pirce: 20000, camar: '12mp', color: 'red' },
];

function getCheapestPhone(phones){
    let min =phones[0];
    for(const phone of phones){
        if(phone.pirce < min.pirce){
            min =phone;
        }
    }
    return min
}

const chaip =getCheapestPhone(mobile);
console.log(chaip)
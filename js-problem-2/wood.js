

function woodQuantity(chairQuantati, tableQuantati, bedQuantati) {
    const perChairWood = 3;
    const perTableWood = 10;
    const bedBedWood = 50;

    const allChaiWood = chairQuantati * perChairWood;
    const allTableWood = tableQuantati * perTableWood;
    const allBedWood = bedQuantati * bedBedWood;


    const totleWood = allChaiWood + allTableWood + allBedWood;

    return totleWood;

}


const wood =woodQuantity(1,1,1);
console.log(wood)
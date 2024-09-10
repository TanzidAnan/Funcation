function calculaterSaving(income) {
    if (typeof income !== 'number') {
        return 'Enter Your Number'
    }
    const houseHent = 5000;
    const meilHent = 3000;
    const handHent = 2000;
    const totalExpense = handHent + houseHent + meilHent;
    if (totalExpense> income){
        return 'Earn more ....'
    }
    const saving = income - totalExpense;
    return saving
}


console.log(calculaterSaving(2000212))
console.log(calculaterSaving())
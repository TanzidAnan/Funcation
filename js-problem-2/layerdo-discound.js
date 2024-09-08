function layeadDiscountTotls(quentity) {
    const fast100Price = 100;
    const secdion200Price = 90;
    const above200Price = 70;

    if (quentity <= 100) {
        const total = quentity * fast100Price;
        return total
    }
    else if (quentity >= 200) {
        const fast100Total = 100 * fast100Price;
        const reamaingQuentati = quentity - 100;
        const reamaingTotal = reamaingQuentati * secdion200Price;
        const total = fast100Total + reamaingTotal;
        return total
    }
    else{
        const fast100Total = 100 * fast100Price;
        const secdion200Total =100* secdion200Price;
        const reamaingQuentati =quentity -200;
        const reamaingTotal =reamaingQuentati *above200Price;
        const total = fast100Total +secdion200Total + reamaingTotal;
        return total;
    }
}

const total =layeadDiscountTotls(150);
console.log(total);
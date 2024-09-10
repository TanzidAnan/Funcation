

function riskaVara(peapule) {
    const bus = 50;
    const micro = 15;
    const riskaCost = 20;
    if(typeof peapule !== 'number'){
        return 'Enter Number'
    }
    const reamingAfterBus = peapule % bus;
    const reamingAfterMicro = reamingAfterBus % micro;
    const reskaCostAfter = reamingAfterMicro * riskaCost
    return reskaCostAfter

}

console.log(riskaVara(234))
const hendleAddCard =() =>{
    const inputNameEl =document.getElementById('Input-name');
    const inputValueEl =document.getElementById('input-value');

    const inputName =inputNameEl.value;
    const inputValue =inputValueEl.value;

    console.log(inputName,inputValue);

    localStorage.setItem();

    inputNameEl.value ='';
    inputValueEl.value =''

}

localStorage.setItem('tanzid',2656565)
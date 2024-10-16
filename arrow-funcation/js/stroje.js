const hendleAddCard =() =>{
    const inputNameEl =document.getElementById('Input-name');
    const inputValueEl =document.getElementById('input-value');

    const inputName =inputNameEl.value;
    const inputValue =inputValueEl.value;

    console.log(inputName,inputValue);

    localStorage.setItem(inputName,inputValue);

    inputName.value ='';
    inputValue.value =''

}

localStorage.setItem('tanzid',2656565)
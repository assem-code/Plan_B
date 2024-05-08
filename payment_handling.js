let addNewMethodButton = document.getElementById('ADD_NEW');
let PayMethod = document.getElementById('PayMethod');
let selectMethod = document.getElementById('selectMethod');
let dopay__Method = document.getElementById('dopay__Method');
let EasyMeza = document.getElementById('Easy_Meza');
let Mobile_method = document.getElementById('Mobile_method');
let goBackBtn = document.querySelector('.icon__back');



let selectedIndex = selectMethod.selectedIndex;
let selectedOption = selectMethod.options[selectedIndex];

console.log(selectedOption.value); 
console.log(selectedOption.textContent); 

function handleSelectChange() {
    let selectedIndex = selectMethod.selectedIndex;
    let selectedOption = selectMethod.options[selectedIndex];
    if(selectedOption.value === "SelectMethod"){
        dopay__Method.style.display = 'none';
        EasyMeza.style.display = 'none';
        Mobile_method.style.display = 'none';
        
    }else if (selectedOption.value === "Dopay") {
        EasyMeza.style.display = 'none';
        Mobile_method.style.display = 'none';
        dopay__Method.style.display = 'block';
    }else if (selectedOption.value === "Easy_Meza"){
        Mobile_method.style.display = 'none';
        dopay__Method.style.display = 'none';
        EasyMeza.style.display = 'block';
    }else if (selectedOption.value === "Mobile"){
        dopay__Method.style.display = 'none';
        EasyMeza.style.display = 'none';
        Mobile_method.style.display = 'block';
    }

}

selectMethod.addEventListener('change', handleSelectChange);



addNewMethodButton.onclick = ()=> {
    PayMethod.style.display = 'block';
    addNewMethodButton.style.display = 'none';
}

goBackBtn.onclick = ()=> {
    PayMethod.style.display = 'none';
    addNewMethodButton.style.display = 'block';

}



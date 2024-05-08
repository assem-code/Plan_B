let PayMethod = document.getElementById('RenewMethod');
let selectMethod = document.getElementById('selectMethod');
let PointMethod = document.getElementById('Point__Method');
let ByBuyingCourse = document.getElementById('BuyBuyingCourses');
let AddBtn = document.getElementById("ADD");
let Gobtn = document.getElementById('goToCourses');



let selectedIndex = selectMethod.selectedIndex;
let selectedOption = selectMethod.options[selectedIndex];

console.log(selectedOption.value); 
console.log(selectedOption.textContent); 

function handleSelectChange() {
    let selectedIndex = selectMethod.selectedIndex;
    let selectedOption = selectMethod.options[selectedIndex];
    if(selectedOption.value === "SelectMethod"){
        PointMethod.style.display = 'none';
        ByBuyingCourse.style.display = 'none';
        
    }else if (selectedOption.value === "ByPoint") {
        ByBuyingCourse.style.display = 'none';
        PointMethod.style.display = 'block';
    }else if (selectedOption.value === "BuyingCourse"){
        PointMethod.style.display = 'none';
        ByBuyingCourse.style.display = 'block';
        AddBtn.style.display = 'none';
        Gobtn.style.display = 'block';
    }

}

selectMethod.addEventListener('change', handleSelectChange);







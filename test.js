let tableRight = document.getElementById('D_right');
let tableLeft = document.getElementById('D_left');
let toggleButtonRight = document.querySelector('#detials_right');
let toggleButtonLeft = document.querySelector('#details_left');


toggleButtonLeft.onclick = () => {
    if (tableRight.style.display !== 'none') {
        tableRight.style.display = 'none';
        tableLeft.style.display = 'table';
        toggleButtonRight.style.display = 'flex';
        toggleButtonLeft.style.display = 'none';
    } else {
        tableLeft.style.display = 'none';
        tableRight.style.display = 'table';
        toggleButtonLeft.style.display = 'none';
        toggleButtonRight.style.display = 'flex';
    }
};



toggleButtonRight.onclick = () => {
    if (tableLeft.style.display !== 'none') {
        tableLeft.style.display = 'none';
        tableRight.style.display = 'table';
        toggleButtonLeft.style.display = 'none';
        toggleButtonRight.style.display = 'flex';
    } else {
        tableRight.style.display = 'none';
        tableLeft.style.display = 'table';
        toggleButtonRight.style.display = 'flex';
        toggleButtonLeft.style.display = 'none';
    }
};






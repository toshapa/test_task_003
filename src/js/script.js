const num1 = document.querySelector('#first_number');
const num2 = document.querySelector('#second_number');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');

const OVerLay = document.querySelector('#total');
const underlay = document.querySelector('#underlay')

// const hideOverLay = document.querySelector('.total');
const placeForm = document.querySelector('.form__sect');
const cross = document.querySelector('.form__sect__cross');




let total = 0;

plus.addEventListener('click', () => {
    total = +num1.value + +num2.value;
    layout();
})

minus.addEventListener('click', () => {
    total = +num1.value - +num2.value;
    layout();
})

multiply.addEventListener('click', () => {
    total = +num1.value * +num2.value;
    layout();
})

underlay.addEventListener('click', () => {
    hide2OverLay();
})

cross.addEventListener('click', () => {
    hide2OverLay()
    
})



function showOverLay () {
    underlay.style.visibility = 'visible';
    underlay.style.opacity = '1';
    // document.querySelector('.total__wrap').style.left = "50%";
}

function hide2OverLay () {
    underlay.style.visibility = 'hidden';
    underlay.style.opacity = '0';
    document.querySelector('.total__wrap').style.left = "-50%";
    placeForm.style.left = '';
}

//

function layout() {
    if (total <= 10 && total >= 0) {
        placeForm.style.left = '50%';
        showOverLay()
        console.log('plus');
        console.log(total);
    } else {
        showOverLay()
        OVerLay.textContent = `Total: ${total}`
        document.querySelector('.total__wrap').style.left = "50%";
        console.log('he')
    }
}




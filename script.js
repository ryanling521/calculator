const body = document.body;
const buttons = Array.from(document.querySelectorAll('.grid-item'));
const display = document.querySelector('.display');
const one = document.querySelector('.grid-item-13');
const two = document.querySelector('.grid-item-14');

function addDisplay(e) {
    display.textContent = e.target.innerText;
    // console.log(e.target.innerText);
}

function clickColor(e) {
    e.target.classList.add('fade-in');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('fade-in')
}


// one.addEventListener('click', addDisplay);
// two.addEventListener('click', addDisplay);


buttons.forEach(function(button) {
    button.addEventListener('click', clickColor);
    button.addEventListener('transitionend', removeTransition);
    button.addEventListener('click', addDisplay);
})

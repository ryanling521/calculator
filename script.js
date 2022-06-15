const body = document.body;
const buttons = Array.from(document.querySelectorAll('.grid-item'));

function clickColor(e) {
    e.target.classList.add('fade-in');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('fade-in')
}

buttons.forEach(function(button) {
    button.addEventListener('click', clickColor);
    button.addEventListener('transitionend', removeTransition);
})

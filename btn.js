let body = document.querySelector('body');
let lovhe = document.querySelector('.lovhe');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
red.addEventListener('click', fred);
blue.addEventListener('mouseover', fblue);
function fred(e) {
    return alert(`Elədə bilirdim!`);
}
function fblue(e) {
    blue.style.display = 'none';
}
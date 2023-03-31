let body = document.querySelector('body');
let lovhe = document.querySelector('.lovhe');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
red.addEventListener('click', fred);
blue.addEventListener('mouseover', fblue1);
blue.addEventListener('mouseout', fblue2)
function fred(e) {
    return alert(`Elədə bilirdim!`);
}
function fblue1(e) {
    blue.style.display = 'none';
}
function fblue2(e) {
    blue.style.display = 'block';
}
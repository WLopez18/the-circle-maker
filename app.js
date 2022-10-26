
// let form = document.getElementsByTagName('form')[0];
let form = document.querySelector('form');
let input = document.querySelector('input');
let container = document.querySelector('#container');
console.log(container)
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    let size = input.value;
    let div = document.createElement('div');
    div.style.width = size + 'rem';
    div.style.height = size + 'rem';
    div.classList.add('circle');
    container.appendChild(div);
});
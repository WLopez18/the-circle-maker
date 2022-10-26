
// let form = document.getElementsByTagName('form')[0];
let form = document.querySelector('form');
let input = document.querySelector('input');
let container = document.querySelector('#container');
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    let size = input.value;
    if (size === '') {
        size = Math.ceil(Math.random() * 10)
    }
    let div = document.createElement('div');
    div.style.width = size + 'rem';
    div.style.height = size + 'rem';
    div.classList.add('circle');
    container.appendChild(div);
});
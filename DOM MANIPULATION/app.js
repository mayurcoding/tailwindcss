
let heading = document.querySelector('h1');
let button = document.querySelector('.button');

button.addEventListener('mouseover', () => {
    button.innerHTML = "i am changed ";
    heading.innerHTML = "i am  also changed ";
})
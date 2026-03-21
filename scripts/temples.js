const hamButton = document.querySelector('.ham-menu');
const navBar = document.querySelector('#nav-bar');

hamButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
    // Optional: toggle a class on the button to animate it to an 'X'
    hamButton.classList.toggle('open');
});
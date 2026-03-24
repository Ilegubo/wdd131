const hamButton = document.querySelector('.ham-menu');
const navBar = document.querySelector('#nav-bar');

hamButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
    // Optional: toggle a class on the button to animate it to an 'X'
    hamButton.classList.toggle('open');
});
const year = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `last modified: ${year.toLocaleString()}`;
const currentYear = new  Date().getFullYear();
document.getElementById("copy-right-year").textContent = currentYear;
const button = document.querySelector("#menu");
const navMenu = document.querySelector("#navmenu");

button.addEventListener("onclick", () => {
    button.classList.toggle("open")
    navMenu.classList.toggle("open")
})
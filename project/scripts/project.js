const button = document.querySelector("#menu");
const navMenu = document.querySelector("#navmenu");

button.addEventListener("click", () => {
    button.classList.toggle("open")
    navMenu.classList.toggle("open")
})


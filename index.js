

const buttonMenu = document.getElementById("abrir");
const hamburguerMenu = document.getElementById("hamburguerMenu");

buttonMenu.addEventListener("click", (e) => {
    hamburguerMenu.classList.toggle("show");
});

const cerrarMenu = document.getElementById("cerrar");

cerrarMenu.addEventListener("click", (e) => {
    hamburguerMenu.classList.toggle("show");
});
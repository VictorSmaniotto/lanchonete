const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const menu = document.getElementById("menu-principal");
const overlay = document.getElementById("overlay");

btnMenu.addEventListener("click", function (e) {
  e.preventDefault(); //cancela outros eventos de click
  menu.classList.toggle("menu-show");
  overlay.classList.toggle("overlay-show");
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("menu-show");
  overlay.classList.toggle("overlay-show");
});

overlay.addEventListener("click", function (e) {
  e.preventDefault();
  if (event.target === this) {
    overlay.classList.remove("overlay-show");
    menu.classList.toggle("menu-show");
  }
});

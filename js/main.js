const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const menu = document.getElementById("menu-principal");

btnMenu.addEventListener("click", function (e) {
  e.preventDefault(); //cancela outros eventos de click
  menu.classList.toggle("menu-show");
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("menu-show");
});

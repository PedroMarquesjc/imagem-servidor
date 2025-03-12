const menuLateral = document.querySelector(".menu-lateral");
const abrirMenu = document.getElementById("abrir-menu");
const fecharMenu = document.getElementById("fechar-menu");

abrirMenu.addEventListener("click", () => {
  menuLateral.classList.add("aberto");
});

fecharMenu.addEventListener("click", () => {
  menuLateral.classList.remove("aberto");
});
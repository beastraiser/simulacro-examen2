const flechas = document.querySelectorAll(".arrow");

flechas.forEach((f) => {
  f.addEventListener("click", function () {
    const subMenu = this.parentElement.nextElementSibling;
    subMenu.classList.toggle("show");
    this.classList.toggle("rotate");
  });
});

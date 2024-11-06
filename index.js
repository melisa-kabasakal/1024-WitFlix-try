const hamMenu = document.querySelector(".hamMenu");
const panel = document.querySelector(".panel");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    panel.classList.toggle("active");
});

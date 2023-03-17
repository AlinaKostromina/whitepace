const burger = document.querySelector("#burger-btn");
const burgerMenu = document.querySelector("#burger-menu");
const close = document.querySelector("#close");


burger.addEventListener("click", () => {
    burgerMenu.style.display = "flex";
    // burgerMenu.style.transition = "all 2s linear";
});
close.addEventListener("click", () => {
    burgerMenu.style.display = "none";
});


const burger = document.querySelector("#burger-btn");
const burgerMenu = document.querySelector("#burger-menu");
const close = document.querySelector("#close");

burger.addEventListener("click", () => {
    burgerMenu.style.display = "flex";
});
close.addEventListener("click", () => {
    burgerMenu.style.display = "none";
});

// slider
const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const dote1 = document.querySelector("#dote1");
const dote2 = document.querySelector("#dote2");
const dote3 = document.querySelector("#dote3");
const doteActive = document.querySelector(".dote-active");
let position = 0;
let width = slide[0].offsetWidth + 32;

dote1.addEventListener("click", () => {
    position = 0;
    slide.forEach (
        (item) => {
            item.style.left = -position + 'px';
        }
    )
    dote1.classList.add("dote-active");
    dote2.classList.remove("dote-active");
    dote3.classList.remove("dote-active");
});
dote2.addEventListener("click", () => {
    position = width;
    slide.forEach (
        (item) => {
            item.style.left = -position + 'px';
        }
    )
    dote1.classList.remove("dote-active");
    dote2.classList.add("dote-active");
    dote3.classList.remove("dote-active");   
});
dote3.addEventListener("click", () => {
    position = width*2;
    slide.forEach (
        (item) => {
            item.style.left = -position + 'px';
        }
    )
    dote1.classList.remove("dote-active");
    dote2.classList.remove("dote-active");
    dote3.classList.add("dote-active");
});





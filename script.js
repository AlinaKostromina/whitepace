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

// можно также положить в константу общий класс dotes, через forEach, применяется в оснв к массивам, к каждому эл-ту применяет заданную функ-ю
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




// слайдер для тача
const publickSlider = document.querySelector('.publick-slider');
publickSlider.addEventListener('touchstart', handleTouchStart, false);
publickSlider.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

function handleTouchStart(event){
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    // console.log(firstTouch);
}

 function handleTouchMove(event){
    if (!x1){
        return false;
    }
    // если координата х2 больше, то движение вправо (координаты слева направо)
    let x2 = event.touches[0].clientX;
    let xDiff = x1 - x2
    if (xDiff < 0){
       position -= width;
        if (position < 0) {
            position = width * 2;
        }
    }
    if (xDiff > 0){
        position += width;
        if (position > width * 2) {
            position = 0;
        }
    }

    slide.forEach((item)=>{ 
        item.style.left = -position + 'px';
        // присваивать нули, чтобы касания заново обнулялись
        // с тачем обнулять всегда!
        x2 = 0;
        x1 = 0;
    })
 }





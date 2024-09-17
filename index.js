const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    menuBtnIcon.setAttribute("class" , isOpen ? "ri-close-line": "ri-menu-line");
});

navLinks.addEventListener("click",  (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class" , "ri-menu-line");
});

const scrollRevealOption = {
    origin:"bottom",
    distance: "50px",
    duration : 1000,
};

ScrollReveal().reveal(".header__container h1",{
     ...scrollRevealOption
});

ScrollReveal().reveal(".header__container form",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container img",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".range__card",{
     duration:1000,
     interval: 500,
});

ScrollReveal().reveal(".location__image img",{
    ...scrollRevealOption,
     origin: "right",
});

ScrollReveal().reveal(".location__content .section__header",{
    ...scrollRevealOption,
      delay: 500, 
});

ScrollReveal().reveal(".location__content  p",{
    ...scrollRevealOption,
      delay: 1000, 
});

ScrollReveal().reveal(".location__content  .location__btn", {
    ...scrollRevealOption,
      delay: 1500, 
});


const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info");


const price = ["225","435","288","625","395"];


const priceE1 = document.getElementById("select-price");


function updateSwiperImage(eventName,args){
      if(eventName === "slideChangeTransitionStart"){
        const index = args && args[0].realIndex;
        priceE1.innerText = price[index];

        selectCards.forEach((item) => {
             item.classList.remove("show__info");
        });
    selectCards[index].classList.add("show__info");
      }
}

const swiper = new Swiper(".swiper",{
    loop : true,
    effect : "coverflow",
    grabCursor : true,
    centeredSlides : true,
    slidesPerView : "auto",
    coverflowEffect : {
        rotate : 0,
        depth: 500,
        modifier : 1,
        scale : 0.75,
        slideShadow : false,
        stretch : -100
    },

    onAny(event,...args){
        updateSwiperImage(event,args)
    },
});



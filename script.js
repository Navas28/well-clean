//       Initialize Swiper

const swiper = new Swiper(".slider-container", {
    effect: "fade",
    // other effects :- cover flow, slide , fade , cube, flip
    speed:1300,
    autoplay: {delay: 4000}
});


//    testimonial slider

const testimonialSwiper = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

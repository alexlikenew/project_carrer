const swiper = new Swiper('.header-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});

const swiper2 = new Swiper('.reviews-swiper', {
    slidesPerView: 2,
    spaceBetween: 32,

    // If we need pagination
    pagination: {
        el: '.reviews-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
    },

});
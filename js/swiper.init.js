if ($(".home-swiper").length > 0) {
  const swiper = new Swiper(".home-swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".home-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".home-swiper-button-next",
      prevEl: ".home-swiper-button-prev",
    },
  });
}
if ($(".block-home-offer__swiper").length > 0) {
  const swiper2 = new Swiper(".block-home-offer__swiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination-home-offer",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-home-offer-next",
      prevEl: ".swiper-home-offer-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      720: {
        slidesPerView: 2.2,
        spaceBetween: 16,
      },
      960: {
        slidesPerView: 3.2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4.2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4.2,
        spaceBetween: 16,
      },
    },
  });
}
// SLIDER HOME SUGGESTED PRODUCTS
const swiper3 = new Swiper(".block-suggested-products__swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: ".swiper-pagination-block-suggested-products",
  },

  navigation: {
    nextEl: ".block-suggested-products__swiper__next",
    prevEl: ".block-suggested-products__swiper__prev",
  },
});
// SLIDER HOME REALIZATION PRODUCTS
const swiper4 = new Swiper(".block-home-realization__swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: ".swiper-pagination-block-home-realization",
  },

  navigation: {
    nextEl: ".block-home-realization__swiper__next",
    prevEl: ".block-home-realization__swiper__prev",
  },
});
// SWIPER PRODUCTS SUGGESTED
const swiper5 = new Swiper(".block-products-suggested__swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination-block-products-suggested",
    clickable: true,
    horizontalClass: true,
  },
  navigation: {
    nextEl: ".swiper-block-products-suggested-next",
    prevEl: ".swiper-block-products-suggested-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

if ($(".block-categories-swiper").length > 0) {
  const swiper = new Swiper(".block-categories-swiper", {
    spaceBetween: 32,
    slidesPerView: 1,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      720: {
        slidesPerView: 3,
      },
      960: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    pagination: {
      el: ".block-categories-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".block-categories .swiper-button-next",
      prevEl: ".block-categories .swiper-button-prev",
    },
  });
}

if (
  document.getElementById("product-gallery") &&
  document.getElementById("product-gallery-thumbs")
) {
  var productGallery = document.getElementById("product-gallery");
  var productGalleryThumbs = document.getElementById("product-gallery-thumbs");

  var swiper = new Swiper(productGalleryThumbs, {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(productGallery, {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

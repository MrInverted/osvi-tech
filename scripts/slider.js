(function () {
  try {
    const swiper = new Swiper('.reviews .swiper', {
      loop: false,
      speed: 800,
      spaceBetween: 200,
      grabCursor: true,
      loopPreventsSliding: false,
      autoHeight: true,

      pagination: {
        el: '.reviews .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      navigation: {
        nextEl: '.reviews .swiper-button-next',
        prevEl: '.reviews .swiper-button-prev',
      },
    });

  } catch {
    console.warn("swiper's catch")
  }

  try {

    new Swiper('.fs-1 .swiper', {
      loop: false,
      speed: 800,
      spaceBetween: 20,
      grabCursor: true,
      loopPreventsSliding: false,
      slidesPerView: 1,

      breakpoints: {
        768: {
          slidesPerView: 2.2,
        },
        1260: {
          slidesPerView: 3.7,
        },
        1740: {
          slidesPerView: 5,
        }
      },

      navigation: {
        nextEl: '.fs-1 .swiper-button-next',
        prevEl: '.fs-1 .swiper-button-prev',
      },

      pagination: {
        el: '.fs-1 .swiper-pagination',
        type: 'bullets',
      },

      scrollbar: {
        el: '.fs-1 .swiper-scrollbar',
        draggable: true,
      },
    });

    new Swiper('.fs-2 .swiper', {
      loop: false,
      speed: 800,
      spaceBetween: 20,
      grabCursor: true,
      loopPreventsSliding: false,
      slidesPerView: 1,

      breakpoints: {
        768: {
          slidesPerView: 2.2,
        },
        1260: {
          slidesPerView: 3.7,
        },
        1740: {
          slidesPerView: 5,
        }
      },

      navigation: {
        nextEl: '.fs-2 .swiper-button-next',
        prevEl: '.fs-2 .swiper-button-prev',
      },

      pagination: {
        el: '.fs-2 .swiper-pagination',
        type: 'bullets',
      },

      scrollbar: {
        el: '.fs-2 .swiper-scrollbar',
        draggable: true,
      },
    });

  } catch {
    console.warn("swiper's catch")
  }
})();
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } catch {
    console.warn("swiper's catch")
  }
})();
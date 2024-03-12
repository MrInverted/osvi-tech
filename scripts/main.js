function addActiveClass(item, activeClass, disabledClass) {
  item.classList.add(activeClass);
  item.classList.remove(disabledClass);
}

function removeActiveClass(item, activeClass, disabledClass) {
  item.classList.remove(activeClass);
  item.classList.add(disabledClass);
}

// -----------------------------------

const introAccordion = document.querySelectorAll(".intro .chooser__select");
const introTab = document.querySelectorAll(".intro chooser-tab");

introAccordion.forEach(item => {
  const title = item.querySelector("chooser-main-select");

  title.onclick = () => {
    if (item.classList.contains("closed")) {
      addActiveClass(item, "opened", "closed");
    } else {
      removeActiveClass(item, "opened", "closed");
    }
  }
})

introTab.forEach((item, index) => {
  item.onclick = () => {
    for (let i = 0; i < introTab.length; i++) {
      removeActiveClass(introTab[i], "active", "disabled");
      removeActiveClass(introAccordion[i], "shown", "hidden");
      if (i === index) continue;
      removeActiveClass(introAccordion[i], "opened", "closed");
    }

    addActiveClass(item, "active", "disabled");
    addActiveClass(introAccordion[index], "shown", "hidden");
  }
})



// ---------------------------------------------------------------------



const aboutTab = document.querySelectorAll(".about about-tab");

aboutTab.forEach(item => {
  item.onclick = () => {
    for (let loopItem of aboutTab) {
      removeActiveClass(loopItem, "opened", "closed");
    }

    addActiveClass(item, "opened", "closed");
  }
})



// ---------------------------------------------------------------------



const swiper = new Swiper('.reviews .swiper', {
  loop: false,
  speed: 400,
  spaceBetween: 200,
  grabCursor: true,
  loopPreventsSliding: false,

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



// ---------------------------------------------------------------------



const reviewsVideo = document.querySelectorAll(".reviews__video");

reviewsVideo.forEach(item => {
  item.onclick = () => {
    item.outerHTML = `
      <iframe src="https://www.youtube.com/embed/${item.dataset.video}&autoplay=1&rel=0&modestbranding=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    `;
  }
})
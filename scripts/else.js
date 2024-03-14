(function () {
  try {
    const burgerTrigger = document.querySelector(".header__burger");
    const burgerMenu = document.querySelector(".header__right");

    burgerTrigger.onclick = () => {
      burgerTrigger.classList.toggle("opened");
      burgerMenu.classList.toggle("menu-is-opened");
      document.body.classList.toggle("burger-is-opened");
    }
  } catch {
    console.warn("burger's catch")
  }

  try {
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
  } catch {
    console.warn("video's catch")
  }

  try {
    const faqBlock = document.querySelectorAll(".faq dl");

    faqBlock.forEach(item => {
      const faqTitle = item.querySelector("dt");

      faqTitle.onclick = () => {
        item.classList.toggle("opened")
      }
    })
  } catch {
    console.warn("faq's catch")
  }
})();

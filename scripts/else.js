(function () {
  try {
    const burgerTrigger = document.querySelector(".header__burger");
    const burgerMenu = document.querySelector(".header__right");
    const links = burgerMenu.querySelectorAll("a");

    burgerTrigger.onclick = () => {
      burgerTrigger.classList.toggle("opened");
      burgerMenu.classList.toggle("menu-is-opened");
      document.body.classList.toggle("burger-is-opened");
    }

    links.forEach(l => {
      l.onclick = () => {
        burgerTrigger.classList.remove("opened");
        burgerMenu.classList.remove("menu-is-opened");
        document.body.classList.remove("burger-is-opened");
      }
    })
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

  try {
    const callMeTrigger = document.querySelector(".call-me__trigger");
    const callMePopup = document.querySelector(".call-me__popup");

    callMeTrigger.onclick = () => {
      callMePopup.hidden = !callMePopup.hidden;
    }

    document.addEventListener("click", (e) => {
      const cp = e.composedPath();

      if (cp.includes(callMePopup) || cp.includes(callMeTrigger)) return;

      callMePopup.hidden = true;
    })
  } catch (error) {
    console.warn("call-me catch")
  }

  try {
    const dropDownTrigger = document.querySelector(".header .dropdown-trigger");
    const dropDown = document.querySelector(".header .dropdown");

    dropDownTrigger.onclick = (e) => {
      dropDown.classList.toggle("active");
    }
  } catch (error) {
    console.warn('burger dropdown catch')
  }
})();

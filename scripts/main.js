(function () {
  try {

    const userInfo = {
      name: "",
      tel: "",
      course: "",
      question: ""
    }

    const addActiveClass = (item, activeClass, disabledClass) => {
      item.classList.add(activeClass);
      item.classList.remove(disabledClass);
    }

    const removeActiveClass = (item, activeClass, disabledClass) => {
      item.classList.remove(activeClass);
      item.classList.add(disabledClass);
    }

    const openAndCloseChooser = (chooserNodeList) => {
      chooserNodeList.forEach(item => {
        const title = item.querySelector(".chooser__title");

        title.onclick = () => {
          if (item.classList.contains("closed")) {
            for (let item of chooserNodeList) {
              addActiveClass(item, "opened", "closed");
            }
          } else {
            for (let item of chooserNodeList) {
              removeActiveClass(item, "opened", "closed");
            }
          }
        }
      })
    }

    const switchTabs = (tabsNodeList, chooserNodeList) => {
      tabsNodeList.forEach((item, index) => {
        item.onclick = () => {
          for (let i = 0; i < tabsNodeList.length; i++) {
            removeActiveClass(tabsNodeList[i], "active", "disabled");
            removeActiveClass(chooserNodeList[i], "shown", "hidden");
          }

          addActiveClass(item, "active", "disabled");
          addActiveClass(chooserNodeList[index], "shown", "hidden");
        }
      })
    }

    const setMainTitle = (titleNodeList, badgeNodeList, chooserNodeList) => {
      badgeNodeList.forEach(badge => {
        badge.onclick = () => {
          for (let title of titleNodeList) {
            title.textContent = badge.textContent;
          }

          for (let item of chooserNodeList) {
            removeActiveClass(item, "opened", "closed");
          }

          userInfo.course = badge.textContent;
        }
      })
    }

    const closePopup = (popupBlock, popupContent, popupCloseButton) => {
      popupBlock.onclick = (e) => {
        if (!e.composedPath().includes(popupContent)) {
          popupBlock.classList.remove("opened");
        }
      }

      popupCloseButton.onclick = () => {
        popupBlock.classList.remove("opened");
      }
    }




    // ---------------------------------------------------------------------

    const introTabs = document.querySelectorAll(".intro .chooser__tab");
    const introChooser = document.querySelectorAll(".intro .chooser__select");
    const introTitle = document.querySelectorAll(".intro .chooser__title");
    const introBadge = document.querySelectorAll(".intro chooser-course");

    switchTabs(introTabs, introChooser);
    openAndCloseChooser(introChooser);
    setMainTitle(introTitle, introBadge, introChooser);

    // --------

    const aboutTabs = document.querySelectorAll(".about about-tab");

    aboutTabs.forEach((tab, index) => {
      tab.onclick = () => {
        for (let i = 0; i < aboutTabs.length; i++) {
          if (i === index) continue;
          removeActiveClass(aboutTabs[i], "opened", "closed");
        }

        if (tab.classList.contains("opened")) {
          removeActiveClass(tab, "opened", "closed");
        } else {
          addActiveClass(tab, "opened", "closed");
        }
      }
    })

    // --------

    const potentialTabs = document.querySelectorAll(".potential .chooser__tab");
    const potentialChooser = document.querySelectorAll(".potential .chooser__select");
    const potentialTitle = document.querySelectorAll(".potential .chooser__title");
    const potentialBadge = document.querySelectorAll(".potential chooser-course");

    switchTabs(potentialTabs, potentialChooser);
    openAndCloseChooser(potentialChooser);
    setMainTitle(potentialTitle, potentialBadge, potentialChooser);

    // --------

    const popupTabs = document.querySelectorAll(".popup .chooser__tab");
    const popupChooser = document.querySelectorAll(".popup .chooser__select");
    const popupTitle = document.querySelectorAll(".popup .chooser__title");
    const popupBadge = document.querySelectorAll(".popup chooser-course");

    switchTabs(popupTabs, popupChooser);
    openAndCloseChooser(popupChooser);
    setMainTitle(popupTitle, popupBadge, popupChooser);

    const popup = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup .popup__content");
    const popupClose = document.querySelector(".popup .popup__close");

    const popupTriggers = document.querySelectorAll(".popup-trigger");

    closePopup(popup, popupContent, popupClose);

    popupTriggers.forEach(item => {
      item.onclick = () => {
        popup.classList.add("opened");

        if (!userInfo.course) return;

        for (let title of popupTitle) {
          title.textContent = userInfo.course;
        }
      }
    })

    // --------

    const popupQuestion = document.querySelector(".popup-question");
    const popupQuestionContent = document.querySelector(".popup-question__content");
    const popupQuestionCloseCross = document.querySelector(".popup-question__close");

    const popupQuestionTrigger = document.querySelectorAll(".popup-question-trigger");

    popupQuestionTrigger.forEach(item => {
      item.onclick = () => {
        popupQuestion.classList.add("opened");
      }
    })

    closePopup(popupQuestion, popupQuestionContent, popupQuestionCloseCross);

    // --------

    const afterForm = document.querySelector(".after-form");
    const afterFormContent = document.querySelector(".after-form__content");
    const afterFormCloseCross = document.querySelector(".after-form__close");
    const afterFormCloseButton = document.querySelector(".after-form button");

    closePopup(afterForm, afterFormContent, afterFormCloseCross);
    closePopup(afterForm, afterFormContent, afterFormCloseButton);

    // --------

    for (let form of document.forms) {
      form.onsubmit = (e) => {
        e.preventDefault();

        if (e.target?.name?.value) userInfo.name = e.target.name.value;
        if (e.target?.tel?.value) userInfo.tel = e.target.tel.value;
        if (e.target?.question?.value) userInfo.question = e.target.question.value;

        const formData = new FormData()
        formData.append("name", userInfo.name);
        formData.append("tel", userInfo.tel);
        formData.append("course", userInfo.course);
        formData.append("question", userInfo.question);

        for (let item of formData.entries()) {
          console.log(item)
        }

        fetch(e.target.action, {
          method: "POST",
          body: formData
        }).then(s => console.log("sendind form..."))
          .catch(e => console.log(e))

        popup.classList.remove("opened");
        popupQuestion.classList.remove("opened");
        afterForm.classList.add("opened");

        return false;
      }
    }

  } catch (error) {
    console.warn("Switchers' catch")
  }
})();


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


(function () {
  try {
    const swiper = new Swiper('.reviews .swiper', {
      loop: false,
      speed: 800,
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
  } catch {
    console.warn("swiper's catch")
  }
})();


const {
  openAndCloseChooser,
  setMainTitle,
  closePopup
} = window;

import { db } from "./subjects-db.js";



try {
  const formatsSliderTrigger = document.querySelectorAll(".formats__price-right button.open-slider");
  const formatsSlider = document.querySelectorAll(".formats__slider");

  try {
    formatsSliderTrigger.forEach((item, index) => {
      item.onclick = () => {
        formatsSlider[index].classList.toggle("active");

        if (formatsSlider[index].classList.contains("active")) {
          item.textContent = "Закрити";
        } else {
          item.textContent = "Обрати абонемент";
        }
      }
    })
  } catch (error) {
    console.warn("FormatsSliderOpening catch")
  }

  const popupPlanTitleType = document.querySelector(".popup-subscription .choose-your-plan.chooser__title plan-type");
  const popupPlanTitleQuantity = document.querySelector(".popup-subscription .choose-your-plan.chooser__title plan-quantity");
  const formatsSliderTriggerSecond = document.querySelector(".formats__price-right button.popup-subscription-trigger");

  try {
    formatsSliderTriggerSecond.addEventListener("click", () => {
      popupPlanTitleType.textContent = "Групові уроки";
      popupPlanTitleQuantity.textContent = "";
    })
  } catch (error) {
    console.warn("FormatSlider group lessons catch")
  }

} catch (error) {
  console.warn("formats slider catch")
}



try {
  const introDirectionForm = document.querySelector(".direction .intro form");
  const introDirectionCourses = document.querySelectorAll(".direction .intro chooser-course");

  try {
    introDirectionCourses.forEach(item => {
      item.addEventListener("click", () => {
        introDirectionForm.course.value = item.textContent;
      })
    })
  } catch (error) {
    console.warn("IntroDirection form catch")
  }

  introDirectionForm.onsubmit = (e) => {
    e.preventDefault();

    const afterForm = document.querySelector(".after-form");

    const formData = new FormData(e.target);
    const { action } = e.target;

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }

    fetch(action, {
      method: 'POST',
      body: formData
    })
      .then(s => console.log("sendind form..."))
      .catch((err) => console.warn(err));

    afterForm.classList.add("opened");
    document.body.classList.add("popup-is-opened");
  }
} catch (error) {
  console.warn("intro direction catch")
}



try {
  const popupCourseChooser = document.querySelectorAll(".popup-subscription .choose-your-course.chooser__select");
  const popupCourseTitle = document.querySelectorAll(".popup-subscription .choose-your-course.chooser__title");
  const popupCourseBadge = document.querySelectorAll(".popup-subscription .choose-your-course chooser-course");

  openAndCloseChooser(popupCourseChooser);
  setMainTitle(popupCourseTitle, popupCourseBadge, popupCourseChooser);

  const popupPlanChooser2 = document.querySelectorAll(".popup-subscription .choose-your-plan.chooser__select");
  const popupPlanTitleType = document.querySelectorAll(".popup-subscription .choose-your-plan.chooser__title plan-type");
  const popupPlanTitleQuantity = document.querySelectorAll(".popup-subscription .choose-your-plan.chooser__title plan-quantity");
  const popupPlanBadge = document.querySelectorAll(".popup-subscription .choose-your-plan chooser-course");

  openAndCloseChooser(popupPlanChooser2);
  setMainTitle(popupPlanTitleQuantity, popupPlanBadge, popupPlanChooser2);

  const lessonsQuantity = document.querySelectorAll(".formats .swiper-slide");
  const form = document.querySelector(".popup-subscription form");

  lessonsQuantity.forEach(item => {
    const h3 = item.querySelector("h3");

    item.addEventListener("click", () => {
      popupPlanTitleQuantity[0].textContent = h3.textContent;
      popupPlanTitleType[0].textContent = item.dataset.type;
      form.plan.value = h3.textContent;
    })
  })

  popupCourseBadge.forEach(item => {
    item.addEventListener("click", () => {
      form.course.value = item.textContent;
    })
  })

  popupPlanBadge.forEach(item => {
    item.addEventListener("click", () => {
      form.plan.value = item.textContent;
    })
  })

  form.onsubmit = (e) => {
    e.preventDefault();
    const afterForm = document.querySelector(".after-form");

    const formData = new FormData(e.target);
    const { action } = e.target;

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }

    fetch(action, {
      method: 'POST',
      body: formData
    })
      .then(s => console.log("sendind form..."))
      .catch((err) => console.warn(err));

    afterForm.classList.add("opened");
    document.body.classList.add("popup-is-opened");
  }

  const popup = document.querySelector(".popup-subscription");
  const popupContent = document.querySelector(".popup-subscription .popup-subscription__content");
  const popupClose = document.querySelector(".popup-subscription .popup-subscription__close");

  const popupTriggers = document.querySelectorAll(".popup-subscription-trigger");

  closePopup(popup, popupContent, popupClose);

  popupTriggers.forEach(item => {
    item.onclick = () => {
      popup.classList.add("opened");
      document.body.classList.add("popup-is-opened");
    }
  })
} catch (error) {
  console.warn('popup-subscription catch')
}



try {
  const bannerCourseChooser = document.querySelectorAll(".banner-acquaintance .choose-your-course.chooser__select");
  const bannerCourseTitle = document.querySelectorAll(".banner-acquaintance .choose-your-course.chooser__title");
  const bannerCourseBadge = document.querySelectorAll(".banner-acquaintance .choose-your-course chooser-course");

  openAndCloseChooser(bannerCourseChooser);
  setMainTitle(bannerCourseTitle, bannerCourseBadge, bannerCourseChooser);

  const bannerPlanChooser = document.querySelectorAll(".banner-acquaintance .choose-your-plan.chooser__select");
  const bannerPlanTitle = document.querySelectorAll(".banner-acquaintance .choose-your-plan.chooser__title");
  const bannerPlanBadge = document.querySelectorAll(".banner-acquaintance .choose-your-plan chooser-course");

  openAndCloseChooser(bannerPlanChooser);
  setMainTitle(bannerPlanTitle, bannerPlanBadge, bannerPlanChooser);

  const popupCourseChooser = document.querySelectorAll(".popup-time .choose-your-course.chooser__select");
  const popupCourseTitle = document.querySelectorAll(".popup-time .choose-your-course.chooser__title");
  const popupCourseBadge = document.querySelectorAll(".popup-time .choose-your-course chooser-course");

  openAndCloseChooser(popupCourseChooser);
  setMainTitle(popupCourseTitle, popupCourseBadge, popupCourseChooser);

  const popupPlanChooser = document.querySelectorAll(".popup-time .choose-your-plan.chooser__select");
  const popupPlanTitle = document.querySelectorAll(".popup-time .choose-your-plan.chooser__title");
  const popupPlanBadge = document.querySelectorAll(".popup-time .choose-your-plan chooser-course");

  openAndCloseChooser(popupPlanChooser);
  setMainTitle(popupPlanTitle, popupPlanBadge, popupPlanChooser);

  const form = document.querySelector(".popup-time form");
  const { date, time, name, tel, course, plan } = form;

  bannerCourseBadge.forEach(item => {
    item.addEventListener("click", () => {
      course.value = item.textContent;
      popupCourseTitle[0].textContent = item.textContent;
    })
  })

  bannerPlanBadge.forEach(item => {
    item.addEventListener("click", () => {
      plan.value = item.textContent;
      popupPlanTitle[0].textContent = item.textContent;
    })
  })

  popupCourseBadge.forEach(item => {
    item.addEventListener("click", () => {
      course.value = item.textContent;
    })
  })

  popupPlanBadge.forEach(item => {
    item.addEventListener("click", () => {
      plan.value = item.textContent;
    })
  })

  form.onsubmit = (e) => {
    e.preventDefault();
    const afterForm = document.querySelector(".after-form");

    const formData = new FormData(e.target);
    const { action } = e.target;

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }

    fetch(action, {
      method: 'POST',
      body: formData
    })
      .then(s => console.log("sendind form..."))
      .catch((err) => console.warn(err));

    afterForm.classList.add("opened");
    document.body.classList.add("popup-is-opened");
  }

  const popup = document.querySelector(".popup-time");
  const popupContent = document.querySelector(".popup-time .popup-time__content");
  const popupClose = document.querySelector(".popup-time .popup-time__close");

  const popupTriggers = document.querySelectorAll(".popup-time-trigger");

  closePopup(popup, popupContent, popupClose);

  popupTriggers.forEach(item => {
    item.onclick = () => {
      setInitPopupFormValue()
      popup.classList.add("opened");
      document.body.classList.add("popup-is-opened");

    }
  })

  // -------------------------------

  function setInitPopupFormValue() {
    const bannerDateInput = document.querySelector(".banner-acquaintance input[name='date']");
    const bannerTimeInput = document.querySelector(".banner-acquaintance input[name='time']");

    date.value = bannerDateInput.value;
    time.value = bannerTimeInput.value;
  }
} catch (error) {
  console.warn("popup-time catch")
}



try {
  const afterForm = document.querySelector(".after-form");

  const f1 = document.querySelector(".direction #about form");
  const f2 = document.querySelector(".direction .banner-question form");
  const f3 = document.querySelector(".call-me form");

  [f1, f2, f3].forEach(item => {
    item.onsubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(item);
      const { action } = e.target;

      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`)
      }

      fetch(action, {
        method: "POST",
        body: formData
      }).then(s => console.log("sendind form..."))
        .catch(e => console.log(e))

      afterForm.classList.add("opened");
      document.body.classList.add("popup-is-opened");

      return false;
    }
  })
} catch (error) {
  console.warn("else form catch")
}



try {
  const popup = document.querySelector(".popup-subject");
  const popupContent = document.querySelector(".popup-subject .popup-subject__content");
  const popupClose = document.querySelector(".popup-subject .popup-subject__close");

  const popupTriggers = document.querySelectorAll(".popup-subject-trigger");

  closePopup(popup, popupContent, popupClose);

  const title = popup.querySelector(".popup-subject__title");
  const text = popup.querySelector(".popup-subject__text");
  const listTitle = popup.querySelector(".popup-subject__list-title");
  const list = popup.querySelector(".popup-subject__list");

  popupTriggers.forEach(item => {
    item.onclick = () => {
      const subject = item.dataset.subject.toLowerCase();

      title.innerHTML = db[subject].title;
      text.innerHTML = db[subject].text.map(item => `<p>${item}</p>`).join(" ");
      listTitle.innerHTML = db[subject].listTitle;
      list.innerHTML = db[subject].listItems.map(item => `<li>${item}</li>`).join(" ");

      popup.classList.add("opened");
      document.body.classList.add("popup-is-opened");
    }
  })
} catch (error) {
  console.warn("popup-subject catch")
}



try {
  const formatsChoosers = document.querySelectorAll(".formats .formats__slider .chooser__select");

  formatsChoosers.forEach((chooser, index) => {
    const title = chooser.querySelector(".chooser__title");
    const badges = chooser.querySelectorAll("chooser-course");

    title.onclick = () => {
      if (chooser.classList.contains("closed")) {
        chooser.classList.remove("closed");
        chooser.classList.add("opened");
      } else {
        chooser.classList.add("closed");
        chooser.classList.remove("opened");
      }
    }

    badges.forEach((badge) => {
      badge.onclick = () => {
        title.textContent = badge.textContent;

        chooser.classList.remove("opened");
        chooser.classList.add("closed");

        const prices = badge.dataset.prices.split(";").map(e => e.split("-"));

        changeSliderItems(prices, index);
      }
    })
  })

  function changeSliderItems(prices, index) {
    const formatsSlider = document.querySelectorAll(".formats .swiper");
    const slides = formatsSlider[index].querySelectorAll(".formats__slide");

    prices.forEach(([a, b], index) => {
      const totalPrice = slides[index].querySelector("p-t");
      const perLessonPrice = slides[index].querySelector("p-l");

      totalPrice.textContent = a;
      perLessonPrice.textContent = b;
    })
  }
} catch (error) {
  console.warn("format's slides from badge click")
}
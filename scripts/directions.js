import {
  openAndCloseChooser,
  setMainTitle,
  closePopup
} from "./helpers.js"


try {
  const dropDownTrigger = document.querySelector(".header .dropdown-trigger");
  const dropDown = document.querySelector(".header .dropdown");

  dropDownTrigger.onclick = (e) => {
    dropDown.classList.toggle("active");
  }
} catch (error) {

}



try {
  const formatsSliderTrigger = document.querySelectorAll(".formats__price-right button");
  const formatsSlider = document.querySelectorAll(".formats__slider");

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

}



try {
  const introDirectionForm = document.querySelector(".direction .intro form");
  const introDirectionCourses = document.querySelectorAll(".direction .intro chooser-course");
  const afterForm = document.querySelector(".after-form");

  introDirectionCourses.forEach(item => {
    item.addEventListener("click", () => {
      introDirectionForm.course.value = item.textContent;
    })
  })

  introDirectionForm.onsubmit = (e) => {
    e.preventDefault()

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
      .then(() => afterForm.classList.add("opened"))
      .catch((err) => console.warn(err));
  }
} catch (error) {

}


try {
  const popupChooser = document.querySelectorAll(".popup-subscription .choose-your-course.chooser__select");
  const popupTitle = document.querySelectorAll(".popup-subscription .choose-your-course.chooser__title");
  const popupBadge = document.querySelectorAll(".popup-subscription .choose-your-course chooser-course");

  openAndCloseChooser(popupChooser);
  setMainTitle(popupTitle, popupBadge, popupChooser);

  const popupChooser2 = document.querySelectorAll(".popup-subscription .choose-your-plan.chooser__select");
  const popupTitle2 = document.querySelectorAll(".popup-subscription .choose-your-plan.chooser__title");
  const popupBadge2 = document.querySelectorAll(".popup-subscription .choose-your-plan chooser-course");

  openAndCloseChooser(popupChooser2);
  setMainTitle(popupTitle2, popupBadge2, popupChooser2);

  const lessonsQuantity = document.querySelectorAll(".formats__slide");
  const form = document.querySelector(".popup-subscription form")

  lessonsQuantity.forEach(item => {
    const h3 = item.querySelector("h3");

    item.addEventListener("click", () => {
      popupTitle2[0].textContent = `Індивідуальні уроки, абонемент на ${h3.textContent}`;
      form.plan.value = h3.textContent;
    })
  })

  popupBadge.forEach(item => {
    item.addEventListener("click", () => {
      form.course.value = item.textContent;
    })
  })

  popupBadge2.forEach(item => {
    item.addEventListener("click", () => {
      form.plan.value = item.textContent;
    })
  })

  form.onsubmit = (e) => {
    e.preventDefault();

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

}



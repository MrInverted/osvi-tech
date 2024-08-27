import {
  userInfo,
  addActiveClass,
  removeActiveClass,
  openAndCloseChooser,
  switchTabs,
  setMainTitle,
  closePopup
} from "./helpers.js"

(function () {
  try {
    const introTabs = document.querySelectorAll(".intro .chooser__tab");
    const introChooser = document.querySelectorAll(".intro .chooser__select");
    const introTitle = document.querySelectorAll(".intro .chooser__title");
    const introBadge = document.querySelectorAll(".intro chooser-course");

    try {
      switchTabs(introTabs, introChooser);
      openAndCloseChooser(introChooser);
      setMainTitle(introTitle, introBadge, introChooser);
    } catch (error) {
      console.warn("IntroTabs catch")
    }

    const aboutTabs = document.querySelectorAll(".about about-tab");
    const aboutTabsTitle = document.querySelectorAll(".about about-tab-title");

    try {
      aboutTabs.forEach((tab, index) => {
        aboutTabsTitle[index].onclick = () => {
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
    } catch (error) {
      console.warn("AboutAccordion catch")
    }

    const potentialTabs = document.querySelectorAll(".potential .chooser__tab");
    const potentialChooser = document.querySelectorAll(".potential .chooser__select");
    const potentialTitle = document.querySelectorAll(".potential .chooser__title");
    const potentialBadge = document.querySelectorAll(".potential chooser-course");

    try {
      switchTabs(potentialTabs, potentialChooser);
      openAndCloseChooser(potentialChooser);
      setMainTitle(potentialTitle, potentialBadge, potentialChooser);
    } catch (error) {
      console.warn("PotentialTabs catch")
    }

    const popupTabs = document.querySelectorAll(".popup .chooser__tab");
    const popupChooser = document.querySelectorAll(".popup .chooser__select");
    const popupTitle = document.querySelectorAll(".popup .chooser__title");
    const popupBadge = document.querySelectorAll(".popup chooser-course");

    try {
      switchTabs(popupTabs, popupChooser);
      openAndCloseChooser(popupChooser);
      setMainTitle(popupTitle, popupBadge, popupChooser);
    } catch (error) {
      console.warn("MainPopupTabs catch")
    }

    const popup = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup .popup__content");
    const popupClose = document.querySelector(".popup .popup__close");

    const popupTriggers = document.querySelectorAll(".popup-trigger");

    try {
      closePopup(popup, popupContent, popupClose);

      popupTriggers.forEach(item => {
        item.onclick = () => {
          popup.classList.add("opened");
          document.body.classList.add("popup-is-opened");

          if (!userInfo.course) return;

          for (let title of popupTitle) {
            title.textContent = userInfo.course;
          }
        }
      })
    } catch (error) {
      console.warn("MainPopup closing catch")
    }

    const popupQuestion = document.querySelector(".popup-question");
    const popupQuestionContent = document.querySelector(".popup-question__content");
    const popupQuestionCloseCross = document.querySelector(".popup-question__close");

    const popupQuestionTrigger = document.querySelectorAll(".popup-question-trigger");

    try {
      popupQuestionTrigger.forEach(item => {
        item.onclick = () => {
          popupQuestion.classList.add("opened");
          document.body.classList.add("popup-is-opened");
        }
      })

      closePopup(popupQuestion, popupQuestionContent, popupQuestionCloseCross);
    } catch (error) {
      console.warn("QuestionPopup closing catch")
    }

    const afterForm = document.querySelector(".after-form");
    const afterFormContent = document.querySelector(".after-form__content");
    const afterFormCloseCross = document.querySelector(".after-form__close");
    const afterFormCloseButton = document.querySelector(".after-form button");

    try {
      closePopup(afterForm, afterFormContent, afterFormCloseCross);
      closePopup(afterForm, afterFormContent, afterFormCloseButton);
    } catch (error) {
      console.warn("AfterFormPopup catch")
    }

    for (let form of document.forms) {
      form.onsubmit = (e) => {
        e.preventDefault();

        if (e.target?.name?.value) userInfo.name = e.target.name.value;
        if (e.target?.tel?.value) userInfo.tel = e.target.tel.value;
        if (e.target?.question?.value) userInfo.question = e.target.question.value;
        if (e.target?.course?.value) userInfo.course = e.target.course.value;

        const formData = new FormData()
        formData.append("name", userInfo.name);
        formData.append("tel", userInfo.tel);
        formData.append("course", userInfo.course);
        formData.append("question", userInfo.question);

        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`)
        }

        fetch(e.target.action, {
          method: "POST",
          body: formData
        }).then(s => console.log("sendind form..."))
          .catch(e => console.log(e))

        if (popup) popup.classList.remove("opened");
        if (popupQuestion) popupQuestion.classList.remove("opened");
        if (afterForm) afterForm.classList.add("opened");
        document.body.classList.add("popup-is-opened");

        return false;
      }
    }

  } catch (error) {
    console.warn("Switchers' catch, ", error)
  }
})();
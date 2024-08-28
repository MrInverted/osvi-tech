const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup .popup__content");
const popupClose = document.querySelector(".popup .popup__close");
const popupTitle = document.querySelectorAll(".popup .chooser__title");
const popupTriggers = document.querySelectorAll(".popup-trigger");

try {
  window.closePopup(popup, popupContent, popupClose);

  popupTriggers.forEach(item => {
    item.onclick = () => {
      popup.classList.add("opened");
      document.body.classList.add("popup-is-opened");

      if (!window.userInfo.course) return;

      for (let title of popupTitle) {
        title.textContent = window.userInfo.course;
      }
    }
  })
} catch (error) {
  console.warn("MainPopup closing catch")
}
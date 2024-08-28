const afterForm = document.querySelector(".after-form");
const afterFormContent = document.querySelector(".after-form__content");
const afterFormCloseCross = document.querySelector(".after-form__close");
const afterFormCloseButton = document.querySelector(".after-form button");

try {
  window.closePopup(afterForm, afterFormContent, afterFormCloseCross);
  window.closePopup(afterForm, afterFormContent, afterFormCloseButton);
} catch (error) {
  console.warn("AfterFormPopup catch")
}

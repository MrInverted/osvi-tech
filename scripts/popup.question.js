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

  window.closePopup(popupQuestion, popupQuestionContent, popupQuestionCloseCross);
} catch (error) {
  console.warn("QuestionPopup closing catch")
}
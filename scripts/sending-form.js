const popup = document.querySelector(".popup");
const popupQuestion = document.querySelector(".popup-question");
const afterForm = document.querySelector(".after-form");

try {
  for (let form of document.forms) {
    form.onsubmit = (e) => {
      e.preventDefault();

      if (e.target?.name?.value) window.userInfo.name = e.target.name.value;
      if (e.target?.tel?.value) window.userInfo.tel = e.target.tel.value;
      if (e.target?.question?.value) window.userInfo.question = e.target.question.value;
      if (e.target?.course?.value) window.userInfo.course = e.target.course.value;

      const formData = new FormData()
      formData.append("name", window.userInfo.name);
      formData.append("tel", window.userInfo.tel);
      formData.append("course", window.userInfo.course);
      formData.append("question", window.userInfo.question);

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
  console.warn("sending form catch")
}

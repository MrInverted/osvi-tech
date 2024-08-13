const quizSteps = document.getElementsByTagName("quiz-step");
const quizQuestions = document.getElementsByClassName("quiz__question");

const quizPaginationText = document.querySelectorAll("[quiz-pagination]");
const quizPagiantionBack = document.querySelectorAll("[quiz-pagination-back]");
const quizPagiantionForward = document.querySelectorAll("[quiz-pagination-forward]");

const steps = {
  current: 1,
  total: quizSteps.length
}

const body = {
  "QuizId": "f84a975d-c530-495b-a69b-dcd29f8acdda",
  "PartialLoader": false
};

(async () => {
  try {
    const req = await fetch("https://leeearn.ai/api/quiz/Get", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const response = await req.json();

    const results = response.map(item => {
      const questionOrder = item["order"];
      const questionId = item["id"];
      const questionText = item["content"];
      const isCheckbox = Boolean(item["maxAnswerCount"]);
      const isRadio = !Boolean(item["maxAnswerCount"]);
      const answers = item["answerList"]["$values"];

      const answersLabels = answers.map(item => {
        const answerOrder = item["order"];
        const answerId = item["id"];
        const answerText = item["content"];

        if (isRadio) return `<label>
          <input type="radio" name="${questionId}" value="${answerText}">
          <span>${answerText}</span>
        </label>`;

        if (isCheckbox) return `<label>
          <input type="checkbox" name="${answerId}" value="${answerText}">
          <span>${answerText}</span>
        </label>`;
      })

      return `<div class="quiz__question">
        <p>${questionText}</p>
        ${answersLabels.join("")}
      </div>`;
    })

    quizQuestions[quizQuestions.length - 1].insertAdjacentHTML("afterend", results.join(""));
  } catch (error) {
    console.warn(error)
  }
})();







// const block = document.createElement("div");
// block.classList.add("quiz__question");

// const title = document.createElement("p");
// title.textContent = questionText;

// const label = document.createElement("label");
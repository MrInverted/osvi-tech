const callMeTrigger = document.querySelector(".call-me__trigger");
const callMePopup = document.querySelector(".call-me__popup");

try {
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
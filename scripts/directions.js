const dropDownTrigger = document.querySelector(".header .dropdown-trigger");
const dropDown = document.querySelector(".header .dropdown");

dropDownTrigger.onclick = (e) => {
  dropDown.classList.toggle("active");
}


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
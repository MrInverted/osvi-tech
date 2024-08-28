try {
  const burgerTrigger = document.querySelector(".header__burger");
  const burgerMenu = document.querySelector(".header__right");
  const links = burgerMenu.querySelectorAll("a");

  burgerTrigger.onclick = () => {
    burgerTrigger.classList.toggle("opened");
    burgerMenu.classList.toggle("menu-is-opened");
    document.body.classList.toggle("burger-is-opened");
  }

  links.forEach(l => {
    l.onclick = () => {
      burgerTrigger.classList.remove("opened");
      burgerMenu.classList.remove("menu-is-opened");
      document.body.classList.remove("burger-is-opened");
    }
  })
} catch {
  console.warn("burger's catch")
}



try {
  const dropDownTrigger = document.querySelector(".header .dropdown-trigger");
  const dropDown = document.querySelector(".header .dropdown");

  dropDownTrigger.onclick = (e) => {
    dropDown.classList.toggle("active");
  }
} catch (error) {
  console.warn('burger dropdown catch')
}
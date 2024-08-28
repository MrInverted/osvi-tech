const aboutTabs = document.querySelectorAll(".about about-tab");
const aboutTabsTitle = document.querySelectorAll(".about about-tab-title");

try {
  aboutTabs.forEach((tab, index) => {
    aboutTabsTitle[index].onclick = () => {
      for (let i = 0; i < aboutTabs.length; i++) {
        if (i === index) continue;
        window.removeActiveClass(aboutTabs[i], "opened", "closed");
      }

      if (tab.classList.contains("opened")) {
        window.removeActiveClass(tab, "opened", "closed");
      } else {
        window.addActiveClass(tab, "opened", "closed");
      }
    }
  })
} catch (error) {
  console.warn("AboutAccordion catch")
}
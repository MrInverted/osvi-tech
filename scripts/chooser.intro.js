const introTabs = document.querySelectorAll(".intro .chooser__tab");
const introChooser = document.querySelectorAll(".intro .chooser__select");
const introTitle = document.querySelectorAll(".intro .chooser__title");
const introBadge = document.querySelectorAll(".intro chooser-course");

try {
  window.switchTabs(introTabs, introChooser);
  window.openAndCloseChooser(introChooser);
  window.setMainTitle(introTitle, introBadge, introChooser);
} catch (error) {
  console.warn("IntroTabs catch", error)
}
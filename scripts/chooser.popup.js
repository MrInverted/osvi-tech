const popupTabs = document.querySelectorAll(".popup .chooser__tab");
const popupChooser = document.querySelectorAll(".popup .chooser__select");
const popupTitle = document.querySelectorAll(".popup .chooser__title");
const popupBadge = document.querySelectorAll(".popup chooser-course");

try {
  window.switchTabs(popupTabs, popupChooser);
  window.openAndCloseChooser(popupChooser);
  window.setMainTitle(popupTitle, popupBadge, popupChooser);
} catch (error) {
  console.warn("MainPopupTabs catch")
}
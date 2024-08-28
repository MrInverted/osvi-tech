const potentialTabs = document.querySelectorAll(".potential .chooser__tab");
const potentialChooser = document.querySelectorAll(".potential .chooser__select");
const potentialTitle = document.querySelectorAll(".potential .chooser__title");
const potentialBadge = document.querySelectorAll(".potential chooser-course");

try {
  window.switchTabs(potentialTabs, potentialChooser);
  window.openAndCloseChooser(potentialChooser);
  window.setMainTitle(potentialTitle, potentialBadge, potentialChooser);
} catch (error) {
  console.warn("PotentialTabs catch")
}
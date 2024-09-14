// let _linksDB;
// let _basicDirection;

try {
  const badges = document.querySelectorAll(".formats__slider chooser-course");
  const buttons = document.querySelectorAll(".formats__slider formats-plan button");
  let directionToLink = _basicDirection;

  if (badges) badges.forEach(item => item.addEventListener("click", () => {
    directionToLink = item.dataset.direction;
  }))

  buttons.forEach(item => item.addEventListener("click", (e) => {
    const quantity = item.dataset.quantity;
    const link = _linksDB[directionToLink][quantity];

    if (link) window.location.assign("/payment/" + link);

    console.log({ directionToLink, quantity, link });
  }))
} catch (error) {
  console.warn(error)
}
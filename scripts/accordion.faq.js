try {
  const faqBlock = document.querySelectorAll(".faq dl");

  faqBlock.forEach(item => {
    const faqTitle = item.querySelector("dt");

    faqTitle.onclick = () => {
      item.classList.toggle("opened")
    }
  })
} catch {
  console.warn("faq's catch")
}
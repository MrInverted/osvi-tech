try {
  const reviewsVideo = document.querySelectorAll(".reviews__video");

  reviewsVideo.forEach(item => {
    item.onclick = () => {
      item.outerHTML = `
      <iframe src="https://www.youtube.com/embed/${item.dataset.video}&autoplay=1&rel=0&modestbranding=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    `;
    }
  })
} catch {
  console.warn("video's catch")
}
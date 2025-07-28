const hero = document.querySelector(".center-wrapper");
const siteContent = document.getElementById("site-content");
const fishButton = document.getElementById("image-button");

fishButton.addEventListener("click", () => {
  hero.classList.add("move-up");
  siteContent.classList.add("reveal");
  fishButton.disabled = true; // prevent more clicks if needed
});
document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector(".center-wrapper");
  const siteContent = document.getElementById("site-content");
  const fishButton = document.getElementById("image-button");

  if (fishButton && hero && siteContent) {
    fishButton.addEventListener("click", () => {
      hero.classList.add("move-up");
      siteContent.classList.add("reveal");
      fishButton.disabled = true; // Optional: disable further clicks
    });
  } else {
    console.error('Element(s) missing:', { fishButton, hero, siteContent });
  }
});

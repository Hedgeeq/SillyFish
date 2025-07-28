document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector(".center-wrapper");
  const siteContent = document.getElementById("site-content");
  const fishButton = document.getElementById("image-button");

  if (fishButton && hero && siteContent) {
    fishButton.addEventListener("click", () => {
      fishButton.classList.add("slide-up"); // slide up and fade out fish button
      siteContent.classList.add("reveal");  // fade in site content
      // Optional: disable further clicks
      fishButton.disabled = true;
    });
  }
});
  } else {
    console.error('Element(s) missing:', { fishButton, hero, siteContent });
  }
});

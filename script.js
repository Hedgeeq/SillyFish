const sillyfish = document.getElementById("sillyfish");
const centerWrapper = document.querySelector(".center-wrapper");
const homeButtons = document.querySelector(".homebuttons");

sillyfish.addEventListener("click", () => {
  centerWrapper.classList.add("center-wrapper.slide-up");

  // Wait until slide animation finishes
  setTimeout(() => {
    homeButtons.classList.remove("hidden"); // show container
    setTimeout(() => {
      homeButtons.classList.add("visible"); // fade in
    }, 50); // tiny delay to trigger opacity transition
  }, 800); // matches .slide-up transition time
});

  

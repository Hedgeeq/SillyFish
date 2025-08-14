document.getElementById('sillyfish').addEventListener('click', function() {
  // Slide up the fish
  document.querySelector('.center-wrapper').classList.add('slide-up');
  
  // Wait until slide-up finishes (matches CSS transition time)
  setTimeout(() => {
    const homeButtons = document.querySelector('.homebuttons');
    homeButtons.classList.remove("hidden"); // make sure they show
    setTimeout(() => {
      homeButtons.classList.add("fade-in"); // trigger fade animation
    }, 50);
  }, 800); // delay matches your CSS .slide-up animation
});

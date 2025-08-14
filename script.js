document.getElementById('sillyfish').addEventListener('click', function() {
  document.querySelector('.center-wrapper').classList.add('slide-up');
});

document.querySelector('.homebuttons').classList.add('fade-in');
setTimeout(() => {
    homebuttons.classList.remove("hidden"); // show container
    setTimeout(() => {
      homeButtons.classList.add("fade-in"); // fade in
    }, 50); // tiny delay to trigger opacity transition
  }, 800); // matches .slide-up transition time
});

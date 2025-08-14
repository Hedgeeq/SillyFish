document.getElementById('sillyfish').addEventListener('click', function() {
  document.querySelector('.center-wrapper').classList.add('slide-up');
});

  // Wait until slide animation finishes
  setTimeout(() => {
    document.querySelector('.homebuttons').classList.remove("hidden"); // show container
    setTimeout(() => {
    document.querySelector('.homebuttons').classList.add("visible"); // fade in
    }, 50); // tiny delay to trigger opacity transition
  }, 800); // matches .slide-up transition time
});

  

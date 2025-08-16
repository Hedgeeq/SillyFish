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
setTimeout(() => {
  const lavientrance = document.querySelector('.lavientrance');
  lavientrance.classList.add('slide-in');
}, 500);
  const lavisit = document.getElementById('lavisit');
  let clickCount = 0;
  const clickSound = new Audio('assets/sounds/squeakers.mp3');
// When slide finishes, sit down
lavientrance.addEventListener('transitionend', () => {
  lavisit.src = 'assets/images/lavisit.gif';
});

// Click changes mood
lavisit.addEventListener('click', () => {
  clickSound.play();
  clickCount++;

  if (clickCount === 10) {
    lavisit.src = 'assets/images/laviangry.gif';
  }
document.addEventListener('mousemove', (e) => {
  if (clickCount >= 10) {
  const rect = fish.getBoundingClientRect(); // fish position + size
  const fishX = rect.left + rect.width / 2;  // center of fish
  const fishY = rect.top + rect.height / 2;  // center of fish

  const dx = event.clientX - fishX;
  const dy = event.clientY - fishY;

  if (Math.abs(dx) > Math.abs(dy)) {
    // Left or Right
    if (dx > 0) {
      fish.src = "assets/images/laviavoidright.gif";
    } else {
      fish.src = "assets/images/laviavoidleft.gif";
    }
  } else {
    // Up or Down
    if (dy > 0) {
      fish.src = "assets/images/laviavoiddown.gif";
    } else {
      fish.src = "assets/images/laviavoidup.gif";
    }
  }
});

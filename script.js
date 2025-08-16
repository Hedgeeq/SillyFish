const sillyfishBtn = document.getElementById('sillyfish');
const lavientrance = document.querySelector('.lavientrance');
const lavientranceImg = document.getElementById('lavientrance-img');
const lavisitImg = document.getElementById('lavisit-img');
const clickSound = document.getElementById('lavi-squeak');

let clickCount = 0;

// Step 1: Fish button slide + show menu
sillyfishBtn.addEventListener('click', () => {
  document.querySelector('.center-wrapper').classList.add('slide-up');

  setTimeout(() => {
    document.querySelector('.homebuttons').classList.add('fade-in');
  }, 800);

  // Trigger Lavi entrance
  setTimeout(() => {
    lavientrance.classList.add('slide-in');
  }, 500);
});

// Step 2: Once entrance animation finishes → switch to sit
lavientrance.addEventListener('transitionend', () => {
  lavientranceImg.style.display = "none"; // hide entrance gif
  lavisitImg.style.display = "block"; // show sit gif
});

// Step 3: Click on Lavi to play sound & track mood
lavisitImg.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  clickCount++;

  if (clickCount >= 10) {
    lavisitImg.src = "assets/images/laviangry.gif";
  }
});

// Step 4: Angry → avoid mouse
document.addEventListener('mousemove', (event) => {
  if (clickCount < 10) return;

  const rect = lavisitImg.getBoundingClientRect();
  const fishX = rect.left + rect.width / 2;
  const fishY = rect.top + rect.height / 2;

  const dx = event.clientX - fishX;
  const dy = event.clientY - fishY;

  if (Math.abs(dx) > Math.abs(dy)) {
    lavisitImg.src = dx > 0
      ? "assets/images/laviavoidright.gif"
      : "assets/images/laviavoidleft.gif";
  } else {
    lavisitImg.src = dy > 0
      ? "assets/images/laviavoiddown.gif"
      : "assets/images/laviavoidup.gif";
  }
});

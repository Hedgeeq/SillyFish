// Elements
const sillyfishBtn    = document.getElementById('sillyfish');
const centerWrapper   = document.querySelector('.center-wrapper');

const lavientrance    = document.querySelector('.lavientrance');
const lavientranceImg = document.getElementById('lavientrance-img');

const lavisit         = document.querySelector('.lavisit');
const lavisitImg      = document.getElementById('lavisit-img');

const clickSound      = document.getElementById('lavi-squeak');

let clickCount = 0;

// 1) Fish button: slide up + show menu + trigger Lavi entrance
sillyfishBtn.addEventListener('click', () => {
  centerWrapper.classList.add('slide-up');

  // Fade in the left menu after slide-up (match CSS time)
  setTimeout(() => {
    document.querySelector('.homebuttons').classList.add('fade-in');
  }, 800);

  // Lavi slides in from left
  setTimeout(() => {
    lavientrance.classList.add('slide-in');
  }, 500);
});

// 2) When Lavi finishes sliding in: swap to sitting image
lavientrance.addEventListener('transitionend', (e) => {
  if (e.propertyName !== 'left') return; // only on left transition

  // Hide entrance, show sit
  lavientrance.style.display = 'none';
  lavisit.style.display = 'block';
});

// 3) Clicking Lavi: squeak + mood counter → angry at 10
lavisitImg.addEventListener('click', () => {
  try { clickSound.currentTime = 0; } catch (_) {}
  clickSound.play?.();

  clickCount++;
  if (clickCount >= 10) {
    lavisitImg.src = 'assets/images/laviangry.gif';
  }
});

// 4) When angry, change image based on mouse quadrant
document.addEventListener('mousemove', (event) => {
  if (clickCount < 10) return;

  const rect = lavisitImg.getBoundingClientRect();
  const cx = rect.left + rect.width  / 2;
  const cy = rect.top  + rect.height / 2;

  const dx = event.clientX - cx;
  const dy = event.clientY - cy;

  // Horizontal vs vertical dominance
  if (Math.abs(dx) > Math.abs(dy)) {
    lavisitImg.src = dx > 0
      ? 'assets/images/laviavoidright.gif'
      : 'assets/images/laviavoidleft.gif';
  } else {
    lavisitImg.src = dy > 0
      ? 'assets/images/laviavoiddown.gif'
      : 'assets/images/laviavoidup.gif';
  }
});

// Elements
const sillyfishBtn    = document.getElementById('sillyfish');
const centerWrapper   = document.querySelector('.center-wrapper');

const lavientrance    = document.querySelector('.lavientrance');

const lavisit         = document.querySelector('.lavisit');

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
  if (e.propertyName !== 'right') return; // only on left transition

  // Hide entrance, show sit
  lavientrance.style.display = 'none';
  lavisit.style.display = 'block';
});

// 3) Clicking Lavi: squeak + mood counter → angry at 10
lavisit.addEventListener('click', () => {
  try { clickSound.currentTime = 0; } catch (_) {}
  clickSound.play?.();
});

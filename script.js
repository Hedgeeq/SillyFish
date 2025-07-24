// Get the box element
const box = document.getElementById("click-box");

// List of random colors to choose from
const colors = ["#ffb6c1", "#98fb98", "#ffa07a", "#dda0dd", "#add8e6", "#f0e68c"];

// Change color when clicked
box.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor;
});

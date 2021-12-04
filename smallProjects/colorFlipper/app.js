// Selecting elements from dom
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
const button = document.querySelector("button");
// Functions
const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 256);
};
const colorFlipper = () => {
  const backGroundColor =
    (body.style.backgroundColor = `rgb(${randomNumberGenerator()}, ${randomNumberGenerator()}, ${randomNumberGenerator()})`);
  h2.innerText = backGroundColor;
  return backGroundColor;
};

// Event listener
button.addEventListener("click", colorFlipper);

function randomImg() {
  const imageContainer = document.getElementById("randomImage");
  const randomIndex = Math.floor(Math.random() * 9) + 1;
  imageContainer.src = `img/${randomIndex}.jpg`;
}

document.getElementById("loadImageButton").onclick = function () {
  randomImg();
};

window.onload = function () {
  randomImg();
};

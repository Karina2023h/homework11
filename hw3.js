const textBlock = document.getElementById("text");
const button = document.getElementById("btnButton");

button.onclick = function () {
  if (textBlock.style.color === "black") {
    textBlock.style.color = "red";
  } else {
    textBlock.style.color = "black";
  }
};

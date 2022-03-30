const button = document.querySelector(".menu-icon");

button.addEventListener("click", function () {
  document.querySelector("header").style.backgroundColor = "black";
  document.querySelector("header").style.display = "block";

  document.querySelector("header").style.paddingBottom = "100%";

  document.querySelector(".menu").style.display = "block";
  document.querySelector(".menu").style.marginTop = "30%";

  document.querySelector(".hr1").style.marginTop = "50px";
});

const copiedText = document.querySelector(".ip");
copiedText.addEventListener("click", function () {
  // window.navigato
});

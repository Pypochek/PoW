const button = document.querySelector(".menu-icon");

button.addEventListener("click", function () {
  document.querySelector("header").style.backgroundColor = "black";
  document.querySelector("header").style.display = "block";

  document.querySelector("header").style.paddingBottom = "100%";

  document.querySelector(".menu").style.display = "block";
  document.querySelector(".menu").style.marginTop = "30%";

  document.querySelector(".hr1").style.marginTop = "50px";
});

// document.querySelector(".hr1").style.fontSize = "35px";

// document.querySelector(".hr2").style.fontSize = "35px";
// document.querySelector(".hr2").style.marginTop = "70px";
// Пофиксить применение стиля только к одному елементу

// document.querySelector(".hr1").style.marginLeft = "60px";
// document.querySelector(".hr2").style.marginLeft = "60px";
// document.querySelector(".hr2").style.marginTop = "70px";

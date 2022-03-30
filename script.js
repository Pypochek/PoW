const button = document.querySelector(".menu-icon");

button.addEventListener("click", function () {
  document.querySelector("header").style.backgroundColor = "rgb(255, 244, 221)";
  document.querySelector("header").style.display = "block";
  document.querySelector("header").style.marginBottom = "100%";
  document.querySelector("header").style.paddingBottom = "100%";

  document.querySelector(".menu").style.display = "block";
  document.querySelector(".hr").style.marginLeft = "60px";
  document.querySelector(".hr").style.marginTop = "70px";
  document.getElementsByClassName(".hr").style.fontSize = "35px";

  // Пофиксить применение чтиля только к одному елементу
});

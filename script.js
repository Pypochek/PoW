//
//
//
//
//
//  Add and remove styles from objects on click
//  Добавление и удаление стилей у обьектов при нажатии кнопок
//
const button = document
  .querySelector(".menu-icon")
  .addEventListener("click", function () {
    document.querySelector(".header").style.backgroundColor = "black";
    document.querySelector(".header").style.display = "block";

    document.querySelector(".header").style.paddingBottom = "75%";

    document.querySelector(".menu").style.display = "block";
    document.querySelector(".menu").style.marginTop = "30%";

    document.querySelector(".hr1").style.marginTop = "50px";

    document.querySelector(".close-icon").style.display = "block";
    document.querySelector(".name").style.display = "none";
    document.querySelector(".name-bitshort").style.display = "none";

    document.querySelector(".information-title").style.display = "none";
    document.querySelector(".information-main").style.display = "none";
    document.querySelector(".players-list").style.display = "none";
  });

const buttonClose = document
  .querySelector(".close-icon")
  .addEventListener("click", function () {
    document.querySelector(".header").style.backgroundColor = "";
    document.querySelector(".menu").style.display = "none";

    if (screen.width >= 515) {
      document.querySelector(".name").style.display = "block";
    } else if (screen.width < 515) {
      document.querySelector(".name-bitshort").style.display = "block";
    }
    document.querySelector(".close-icon").style.display = "none";
    document.querySelector(".header").style.paddingBottom = "60px";
    document.querySelector(".information-title").style.display = "block";
    document.querySelector(".information-main").style.display = "";
    document.querySelector(".players-list").style.display = "";
  });

//
//
//
//
// Copy text on click at stroke
// Копирование текста при нажатии на строчку

const copiedText = document.querySelector(".ip");

copiedText.addEventListener("click", function () {
  window.open("https://discord.gg/xMJQapRBYe");
});

//
//
//
// Sticky menu
// Липкое меню

let header = document.getElementById("headPage");
let sticky = header.offsetTop + 35;

function ScrollFunction() {
  if (screen.width <= 900) {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky-header");
      document.querySelector(".name").style.paddingRight = "50px";
      document.querySelector(".name-bitshort").style.paddingRight = "50px";

      document.querySelector(".header").style.paddingBottom = "80px";
    } else {
      header.classList.remove("sticky-header");
      document.querySelector(".name").style.paddingRight = "0";
      document.querySelector(".name-bitshort").style.paddingRight = "0";
      document.querySelector(".header").style.paddingBottom = "60px";
    }
  } else console.log();
}

window.onscroll = function () {
  ScrollFunction();
};

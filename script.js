const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".list-container");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

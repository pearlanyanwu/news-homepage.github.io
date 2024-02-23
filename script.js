const openButton = document.getElementById("menu-open");
const closeButton = document.getElementById("menu-close");
const sideNav = document.getElementById("side-nav");
const body = document.body;

openButton.addEventListener("click", () => {
  sideNav.style.width = "245px";
  body.style.backgroundColor = "hsl(233, 8%, 79%)";
});

closeButton.addEventListener("click", () => {
  sideNav.style.width = "0";
  body.style.backgroundColor = "hsl(36, 100%, 99%)";
});
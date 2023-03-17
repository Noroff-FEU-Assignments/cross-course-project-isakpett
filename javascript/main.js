document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navMain = document.getElementById("nav-main");

  hamburgerMenu.addEventListener("click", function () {
    navMain.classList.toggle("active");
  });
});

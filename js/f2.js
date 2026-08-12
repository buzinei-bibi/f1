document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  const icon = document.getElementById("menu-icon");

  btn.onclick = function () {
    menu.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
    icon.classList.toggle("bi-list");
    icon.classList.toggle("bi-x-lg");
  };

  overlay.onclick = function () {
    menu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    icon.classList.add("bi-list");
    icon.classList.remove("bi-x-lg");
  };
});

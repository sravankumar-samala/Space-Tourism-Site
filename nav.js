const navList = document.querySelector(".nav-list");
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
  let visibility = navList.getAttribute("data-visible");
  if (visibility === "false") {
    navList.setAttribute("data-visible", true);
    navToggler.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navList.setAttribute("data-visible", false);
    navToggler.setAttribute("aria-expanded", false);
  }
});

let myNav = document.getElementById("mynav");
window.onscroll = function () {
  "use strict";
  if (document.documentElement.scrollTop >= 30) {
    myNav.classList.add("nav-colored");
  } else {
    myNav.classList.remove("nav-colored");
  }
};

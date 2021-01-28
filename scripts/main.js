// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a , #start");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}

//change header background to black
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    document.querySelector("header").style.backgroundColor = "#000";
  });
  link.addEventListener("mouseout", () => {
    document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.692)";
  });
});

// window.addEventListener("scroll",() => {
//   navMenu.style.top = scrollY;
//   navToggler.style.top = scrollY;
// });

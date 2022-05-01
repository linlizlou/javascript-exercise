// Get
const toggleSource = document.getElementById("toggle-source");
const navList = document.getElementById("nav-list");
// Define

// Wire it up
toggleSource.addEventListener("click", () => {
  navList.classList.toggle("active-source");
});

window.onscroll = function () {
  stickyNav();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Get
var activeSlideshow = 0;
var previousButton = document.querySelector("#previous");
var nextButton = document.querySelector("#next");
var slides = document.querySelectorAll(".slideshow > div");

// Define
function toggleSlide(from, to) {
  slides[from].classList.remove("activeSlideshow");
  slides[to].classList.add("activeSlideshow");
}

function previous() {
  var from = active;
  if (activeSlideshow <= 0) {
    activeSlideshow = slides.length - 1;
  } else {
    activeSlideshow--;
  }
  toggleSlide(from, activeSlideshow);
}
function next() {
  var from = activeSlideshow;
  if (activeSlideshow >= slides.length - 1) {
    activeSlideshow = 0;
  } else {
    activeSlideshow++;
  }
  toggleSlide(from, activeSlideshow);
}
// Wire it up
previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);

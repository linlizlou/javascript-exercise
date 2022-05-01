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

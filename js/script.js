const yearEL = document.querySelector(".year");
yearEL.textContent = new Date().getFullYear();

const btnEl = document.querySelector(".button-mobile-nav");
const header = document.querySelector(".header");

btnEl.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 3100) {
    header.classList.add("fixed-2");
    header.classList.remove("fixed-1");
  } else if (window.scrollY > 650) {
    header.classList.add("fixed-1");
    header.classList.remove("fixed-2");
  } else {
    header.classList.remove("fixed-1");
    header.classList.remove("fixed-2");
  }
});

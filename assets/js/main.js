const hamburger = document.querySelector('[data-js="hamburger-input"]');
const navList = document.querySelector('[data-js="nav-list"]');
const scroll = document.querySelector('[data-js="scrollToTop"]');

hamburger.addEventListener("click", () => {
  navList.classList.toggle("display-block");
});

scroll.addEventListener("change", () => {
  if (scroll.checked) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    scroll.checked = false;
  }
});

const hamburgerInput = document.querySelector('[data-js="hamburger-input"]');
const navList = document.querySelector('[data-js="nav-list"]');

hamburgerInput.addEventListener("click", () => {
  navList.classList.toggle("display-block");
});

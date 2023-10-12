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

const fetchAsync = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error("Error Message", error);
  } finally {
    console.log("add cleanup code here (if needed it)");
  }
};

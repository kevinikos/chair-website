const navigator = () => {
  const contactButton = document.getElementById("contactBtn");
  const contactSection = document.querySelector(".contact_section");
  const priceButton = document.getElementById("priceBtn");
  const priceSection = document.querySelector(".price_section");
  const scrollUpButton = document.getElementById("scrollUpBtn");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      scrollUpButton.classList.add("visible");
    } else {
      scrollUpButton.classList.remove("visible");
    }
  });

  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  contactButton.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({
      top: contactSection.offsetTop,
      behavior: "smooth"
    });
  });

  priceButton.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({
      top: priceSection.offsetTop,
      behavior: "smooth"
    });
  });
};

document.addEventListener("DOMContentLoaded", navigator);

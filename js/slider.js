const slider = () => {
  const nextButton = document.querySelector(".right_arrow");
  const prevButton = document.querySelector(".left_arrow");
  const sliderItems = document.querySelectorAll(".slider_list li");
  let currentIndex = 0;
  sliderItems[currentIndex].classList.add("visible");

  const nextSlide = () => {
    sliderItems[currentIndex++].classList.remove("visible");
    if (currentIndex == sliderItems.length) {
      currentIndex = 0;
    }
    sliderItems[currentIndex].classList.add("visible");
  };

  const prevSlide = () => {
    sliderItems[currentIndex--].classList.remove("visible");
    if (currentIndex < 0) {
      currentIndex = sliderItems.length - 1;
    }
    sliderItems[currentIndex].classList.add("visible");
  };

  nextButton.addEventListener("click", nextSlide);

  prevButton.addEventListener("click", prevSlide);
};

document.addEventListener("DOMContentLoaded", slider);

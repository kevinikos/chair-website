const checkbox = document.querySelector(".checkbox");

const shakeCheckbox = () => {
  checkbox.classList.add("shake_checkbox");
  setTimeout(() => {
    checkbox.classList.remove("shake_checkbox");
  }, 500);
};

checkbox.addEventListener("click", shakeCheckbox);

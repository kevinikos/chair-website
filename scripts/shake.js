// checkbox
const checkboxStatus = document.getElementById("permission");
const checkbox = document.querySelector(".checkbox");

const shakeCheckbox = e => {
  if (checkboxStatus.checked === false) {
    checkbox.classList.add("shake_element");
    setTimeout(() => {
      checkbox.classList.remove("shake_element");
    }, 500);
    e.preventDefault();
    return false;
  }
  return true;
};

// inputs
const inputs = document.querySelectorAll("input, textarea");
const sendBtn = document.getElementById("sendBtn");

const shakeElements = e => {
  inputs.forEach(input => {
    if (input.value === "") {
      input.classList.add("shake_element");
      setTimeout(() => {
        input.classList.remove("shake_element");
      }, 500);
      e.preventDefault();
      return false;
    }
  });
  shakeCheckbox();
  return true;
};

sendBtn.addEventListener("click", shakeElements);

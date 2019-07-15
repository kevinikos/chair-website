const shake = () => {
  const checkboxStatus = document.getElementById("permission");
  const checkbox = document.querySelector(".checkbox");
  const inputs = document.querySelectorAll("form input, form textarea");
  const sendBtn = document.getElementById("sendBtn");

  // checkbox
  const shakeCheckbox = e => {
    if (checkboxStatus.checked === false) {
      checkbox.classList.add("shake_element");
      setTimeout(() => {
        checkbox.classList.remove("shake_element");
      }, 500);
      e.preventDefault();
      return false;
    }
    checkboxStatus.value = "accepted";
    return true;
  };

  // text inputs
  const shakeElements = e => {
    shakeCheckbox(e);
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
    return true;
  };

  sendBtn.addEventListener("click", shakeElements);
};

document.addEventListener("DOMContentLoaded", shake);

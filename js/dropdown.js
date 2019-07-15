const dropdown = () => {
  const menuItem = document.querySelector(".menu .menu_item.dropdown");
  const dropdownContent = menuItem.querySelector(".dropdown_content");

  menuItem.addEventListener("mouseover", () => {
    dropdownContent.classList.add("show");
  });
  menuItem.addEventListener("mouseout", () => {
    dropdownContent.classList.remove("show");
  });
};

document.addEventListener("DOMContentLoaded", dropdown);

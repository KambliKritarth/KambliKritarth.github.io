const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.addEventListener("mouseover", function () {
      menu.dataset.activeIndex = index;
    })
  });
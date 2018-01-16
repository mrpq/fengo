function removeClass(className, elem) {
  elem.classList.remove(className);
}
function collapseHeaderNav() {
  const burger = document.querySelector(".js-nav-heading-burger");
  removeClass("nav-heading__burger--active", burger);
  const inputs = document.querySelectorAll(
    ".js-header-menu input[type='checkbox']"
  );
  inputs.forEach(input => (input.checked = false));
  const nav = document.querySelector(".js-header-menu");
  if (nav) {
    removeClass("main-nav__menu-container--active", nav);
  }
}

function burgerOpen(burger) {
  const headerNavMenuContainer = document.querySelector(".js-header-menu");
  headerNavMenuContainer.classList.toggle("main-nav__menu-container--active");
  burger.classList.toggle("nav-heading__burger--active");
}
function burgerClose(burger) {
  burger.classList.toggle("nav-heading__burger--active");
  collapseHeaderNav();
}
function burgerClickHandler(event) {
  const burger = event.target.closest(".js-nav-heading-burger");
  if (!burger) return;
  if (burger.classList.contains("nav-heading__burger--active")) {
    burgerClose(burger);
    return;
  } else {
    burgerOpen(burger);
    return;
  }
}
window.addEventListener("click", burgerClickHandler);

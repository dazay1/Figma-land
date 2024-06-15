const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*============= MENU SHOW ======*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*============ MENU HIDDEN ======*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const galleryButtonOpen = document.getElementById("gallery__button-open"),
  galleryList = document.getElementById("gallery__hidden"),
  galleryButtonClose = document.getElementById("gallery__button-close");

if (galleryButtonOpen) {
  galleryButtonOpen.addEventListener("click", () => {
    galleryList.classList.add("active");
    galleryButtonOpen.classList.add('hidden')
  });
}
if (galleryButtonClose) {
  galleryButtonClose.addEventListener("click", () => {
    galleryList.classList.remove("active");
    galleryButtonOpen.classList.remove('hidden')
  });
}

const partnerButtonOpen = document.getElementById("partner__button-open"),
  partnerList = document.getElementById("partner__hidden"),
  partnerButtonClose = document.getElementById("partner__button-close");

if (partnerButtonOpen) {
  partnerButtonOpen.addEventListener("click", () => {
    partnerList.classList.add("open");
    partnerButtonOpen.classList.add('hidden')
  });
}
if (partnerButtonClose) {
  partnerButtonClose.addEventListener("click", () => {
    partnerList.classList.remove("open");
    partnerButtonOpen.classList.remove('hidden')
  });
}


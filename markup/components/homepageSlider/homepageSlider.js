// import Siema from 'siema';
var Siema;
const initHomePageSlider = () => {
  try {
    let siemaHomePageSlider = new Siema({
      selector: ".js-homepage-slider"
    });
    document
      .querySelector(".js-homepage-slider-prev")
      .addEventListener("click", () => siemaHomePageSlider.prev());
    document
      .querySelector(".js-homepage-slider-next")
      .addEventListener("click", () => siemaHomePageSlider.next());
    const dots = document.querySelectorAll(`[class*="js-homepage-slider-dot"]`);
    dots.forEach((elem, i) =>
      elem.addEventListener("click", () => siemaHomePageSlider.goTo(i))
    );
  } catch (e) {
    console.log(e);
  }
};
window.addEventListener('load', initHomePageSlider);
initHomePageSlider();

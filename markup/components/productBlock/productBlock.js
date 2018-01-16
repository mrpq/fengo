// import Siema from 'siema';
var Siema;
const initProductBlockSlides = () => {
  try {
    const productSliders = document.querySelectorAll(".js-siema-product");
    if (!productSliders) throw new Error();
    const productSledersControls = document.querySelectorAll(
      ".product-slider-controls"
    );
    productSliders.forEach((elem, i) => {
      const selector = `js-siema-product-${i}`;
      elem.classList.add(selector);
      const siema = new Siema({ selector: `.${selector}` });
      productSledersControls[i].children[0].addEventListener("click", () => {
        siema.goTo(0);
      });
      productSledersControls[i].children[1].addEventListener("click", () => {
        siema.goTo(1);
      });
      productSledersControls[i].children[2].addEventListener("click", () => {
        siema.goTo(2);
      });
    });
  } catch (e) {
    console.log(e);
  }
};
window.addEventListener('load', initProductBlockSlides);
initProductBlockSlides();

var Siema;
const initProductBlockSlides = () => {
  try {
    const productSlides = document.querySelectorAll("[class*='js-product-slides-']");
    const productsCount = productSlides.length;
    for (let i = 1; i <= productsCount; i += 1) {
      const siema = new Siema({ selector: `.js-product-slides-${i}` });
      for (let j = 0; j <= 2; j++) {
        const slideButton = document.querySelector(`.js-product-slides-controls-${i}${j}`);
        slideButton.addEventListener('click', () => {
          siema.goTo(j);
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
};
window.addEventListener('DOMContentLoaded', initProductBlockSlides);

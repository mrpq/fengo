// import Siema from 'siema';
var Siema;
const fromBlogSliderInit = () => {
  const fromBlogSlider = document.querySelector(".js-from-blog-slider");
  console.log("Hello");
  if (!fromBlogSlider) return;
  const prev = document.querySelector(".js-from-blog-prev");
  const next = document.querySelector(".js-from-blog-next");
  const siema = new Siema({ selector: ".js-from-blog-slider" });
  prev.addEventListener("click", () => siema.prev());
  next.addEventListener("click", () => siema.next());
};

const favSliderInit = () => {
  const favoriteSlider = document.querySelector(".js-favorite-slider");
  if (!favoriteSlider) return;
  const prev = document.querySelector(".js-favorite-prev");
  const next = document.querySelector(".js-favorite-next");
  const siema = new Siema({
    selector: ".js-favorite-slider",
    perPage: {
      1: 2,
      767: 1,
      959: 2
    }
  });
  prev.addEventListener("click", () => siema.prev());
  next.addEventListener("click", () => siema.next());
};

window.addEventListener('load', fromBlogSliderInit);
fromBlogSliderInit();
window.addEventListener('load', favSliderInit);
favSliderInit();

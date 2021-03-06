!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Siema", [], t) : "object" == typeof exports ? exports.Siema = t() : e.Siema = t() }(this, function () { return function (e) { function t(s) { if (i[s]) return i[s].exports; var n = i[s] = { i: s, l: !1, exports: {} }; return e[s].call(n.exports, n, n.exports, t), n.l = !0, n.exports } var i = {}; return t.m = e, t.c = i, t.d = function (e, i, s) { t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: s }) }, t.n = function (e) { var i = e && e.__esModule ? function () { return e.default } : function () { return e }; return t.d(i, "a", i), i }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 0) }([function (e, t, i) { "use strict"; function s(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, r = function () { function e(e, t) { for (var i = 0; i < t.length; i++) { var s = t[i]; s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s) } } return function (t, i, s) { return i && e(t.prototype, i), s && e(t, s), t } }(), o = function () { function e(t) { var i = this; if (s(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭"); this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.startIndex, this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function (e) { i[e] = i[e].bind(i) }), this.init() } return r(e, [{ key: "attachEvents", value: function () { window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null, preventClick: !1 }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler)) } }, { key: "detachEvents", value: function () { window.removeEventListener("resize", this.resizeHandler), this.selector.style.cursor = "auto", this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler) } }, { key: "init", value: function () { this.attachEvents(), this.resolveSlidesNumber(), this.selector.style.overflow = "hidden", this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab"); for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) { var i = document.createElement("div"); i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i) } this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent(), this.config.onInit.call(this) } }, { key: "resolveSlidesNumber", value: function () { if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage; else if ("object" === n(this.config.perPage)) { this.perPage = 1; for (var e in this.config.perPage) window.innerWidth >= e && (this.perPage = this.config.perPage[e]) } } }, { key: "prev", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = arguments[1]; if (!(this.innerElements.length <= this.perPage)) { var i = this.currentSlide; 0 === this.currentSlide && this.config.loop ? this.currentSlide = this.innerElements.length - this.perPage : this.currentSlide = Math.max(this.currentSlide - e, 0), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this)) } } }, { key: "next", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = arguments[1]; if (!(this.innerElements.length <= this.perPage)) { var i = this.currentSlide; this.currentSlide === this.innerElements.length - this.perPage && this.config.loop ? this.currentSlide = 0 : this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this)) } } }, { key: "goTo", value: function (e, t) { if (!(this.innerElements.length <= this.perPage)) { var i = this.currentSlide; this.currentSlide = Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this)) } } }, { key: "slideToCurrent", value: function () { this.sliderFrame.style[this.transformProperty] = "translate3d(-" + this.currentSlide * (this.selectorWidth / this.perPage) + "px, 0, 0)" } }, { key: "updateAfterDrag", value: function () { var e = this.drag.endX - this.drag.startX, t = Math.abs(e), i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1; e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent() } }, { key: "resizeHandler", value: function () { this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length - this.perPage), this.slideToCurrent() } }, { key: "clearDrag", value: function () { this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null, preventClick: this.drag.preventClick } } }, { key: "touchstartHandler", value: function (e) { -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY) } }, { key: "touchendHandler", value: function (e) { e.stopPropagation(), this.pointerDown = !1, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag() } }, { key: "touchmoveHandler", value: function (e) { e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo && (e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + -1 * (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) + "px, 0, 0)") } }, { key: "mousedownHandler", value: function (e) { -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX) } }, { key: "mouseupHandler", value: function (e) { e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag() } }, { key: "mousemoveHandler", value: function (e) { e.preventDefault(), this.pointerDown && ("A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + -1 * (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) + "px, 0, 0)") } }, { key: "mouseleaveHandler", value: function (e) { this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.updateAfterDrag(), this.clearDrag()) } }, { key: "clickHandler", value: function (e) { this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1 } }, { key: "updateFrame", value: function () { this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab"); for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) { var i = document.createElement("div"); i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i) } this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent() } }, { key: "remove", value: function (e, t) { if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭"); e < this.currentSlide && this.currentSlide-- , this.innerElements.splice(e, 1), this.updateFrame(), t && t.call(this) } }, { key: "insert", value: function (e, t, i) { if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭"); if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭"); var s = t <= this.currentSlide > 0 && this.innerElements.length; this.currentSlide = s ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.updateFrame(), i && i.call(this) } }, { key: "prepend", value: function (e, t) { this.insert(e, 0), t && t.call(this) } }, { key: "append", value: function (e, t) { this.insert(e, this.innerElements.length + 1), t && t.call(this) } }, { key: "destroy", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments[1]; if (this.detachEvents(), e) { for (var i = document.createDocumentFragment(), s = 0; s < this.innerElements.length; s++)i.appendChild(this.innerElements[s]); this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style") } t && t.call(this) } }], [{ key: "mergeSettings", value: function (e) { var t = { selector: ".siema", duration: 200, easing: "ease-out", perPage: 1, startIndex: 0, draggable: !0, multipleDrag: !0, threshold: 20, loop: !1, onInit: function () { }, onChange: function () { } }, i = e; for (var s in i) t[s] = i[s]; return t } }, { key: "webkitOrNot", value: function () { return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform" } }]), e }(); t.default = o, e.exports = t.default }]) });

"use strict";

var moveSectionsForMobile = function moveSectionsForMobile() {
  try {
    var screenWidth = document.body.offsetWidth;
    var adBlock2 = document.querySelector(".ad-block-2-container");
    // const adBlock6 = document.querySelector(".ad-block-6-container");
    var adSectionContainer1 = document.querySelector(".ad-section-container-1");
    var adSectionContainer2 = document.querySelector(".ad-section-container-2");
    if (screenWidth < 768) {
      adSectionContainer1.appendChild(adBlock2);
    } else {
      adSectionContainer2.insertBefore(adBlock2, adSectionContainer2.firstElementChild);
    }
  } catch (e) {
    console.log(e);
    return;
  }
};
moveSectionsForMobile();
window.addEventListener("resize", moveSectionsForMobile);
"use strict";
"use strict";

var Siema;
var fromBlogSliderInit = function fromBlogSliderInit() {
  var fromBlogSlider = document.querySelector(".js-from-blog-slider");
  if (!fromBlogSlider) return;
  var prev = document.querySelector(".js-from-blog-prev");
  var next = document.querySelector(".js-from-blog-next");
  var siema = new Siema({ selector: ".js-from-blog-slider" });
  prev.addEventListener("click", function () {
    return siema.prev();
  });
  next.addEventListener("click", function () {
    return siema.next();
  });
};

var favSliderInit = function favSliderInit() {
  var favoriteSlider = document.querySelector(".js-favorite-slider");
  if (!favoriteSlider) return;
  var prev = document.querySelector(".js-favorite-prev");
  var next = document.querySelector(".js-favorite-next");
  var siema = new Siema({
    selector: ".js-favorite-slider",
    perPage: {
      1: 2,
      767: 1,
      959: 2
    }
  });
  prev.addEventListener("click", function () {
    return siema.prev();
  });
  next.addEventListener("click", function () {
    return siema.next();
  });
};

window.addEventListener('DOMContentLoaded', fromBlogSliderInit);
window.addEventListener('DOMContentLoaded', favSliderInit);
"use strict";

// import Siema from 'siema';
var Siema;
var initHomePageSlider = function initHomePageSlider() {
  try {
    var siemaHomePageSlider = new Siema({
      selector: ".js-homepage-slider"
    });
    if (!siemaHomePageSlider) return;
    document.querySelector(".js-homepage-slider-prev").addEventListener("click", function () {
      return siemaHomePageSlider.prev();
    });
    document.querySelector(".js-homepage-slider-next").addEventListener("click", function () {
      return siemaHomePageSlider.next();
    });
    var dots = document.querySelectorAll("[class*=\"js-homepage-slider-dot\"]");
    dots.forEach(function (elem, i) {
      return elem.addEventListener("click", function () {
        return siemaHomePageSlider.goTo(i);
      });
    });
  } catch (e) {
    console.log(e);
  }
};
window.addEventListener('DOMContentLoaded', initHomePageSlider);
"use strict";
'use strict';

var Siema;
var initProductBlockSlides = function initProductBlockSlides() {
  try {
    var productSlides = document.querySelectorAll("[class*='js-product-slides-']");
    var productsCount = productSlides.length;

    var _loop = function _loop(i) {
      var siema = new Siema({ selector: '.js-product-slides-' + i });

      var _loop2 = function _loop2(j) {
        var slideButton = document.querySelector('.js-product-slides-controls-' + i + j);
        slideButton.addEventListener('click', function () {
          siema.goTo(j);
        });
      };

      for (var j = 0; j <= 2; j++) {
        _loop2(j);
      }
    };

    for (var i = 1; i <= productsCount; i += 1) {
      _loop(i);
    }
  } catch (e) {
    console.log(e);
  }
};
window.addEventListener('DOMContentLoaded', initProductBlockSlides);
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";

function removeClass(className, elem) {
  elem.classList.remove(className);
}
function collapseHeaderNav() {
  var burger = document.querySelector(".js-nav-heading-burger");
  removeClass("nav-heading__burger--active", burger);
  var inputs = document.querySelectorAll(".js-header-menu input[type='checkbox']");
  inputs.forEach(function (input) {
    return input.checked = false;
  });
  var nav = document.querySelector(".js-header-menu");
  if (nav) {
    removeClass("main-nav__menu-container--active", nav);
  }
}

function burgerOpen(burger) {
  var headerNavMenuContainer = document.querySelector(".js-header-menu");
  headerNavMenuContainer.classList.toggle("main-nav__menu-container--active");
  burger.classList.toggle("nav-heading__burger--active");
}
function burgerClose(burger) {
  burger.classList.toggle("nav-heading__burger--active");
  collapseHeaderNav();
}
function burgerClickHandler(event) {
  var burger = event.target.closest(".js-nav-heading-burger");
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
"use strict";
"use strict";
"use strict";
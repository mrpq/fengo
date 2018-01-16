const moveSectionsForMobile = () => {
  try {
    const screenWidth = document.body.offsetWidth;
    const adBlock2 = document.querySelector(".ad-block-2-container");
    // const adBlock6 = document.querySelector(".ad-block-6-container");
    const adSectionContainer1 = document.querySelector(
      ".ad-section-container-1"
    );
    const adSectionContainer2 = document.querySelector(
      ".ad-section-container-2"
    );
    if (screenWidth < 768) {
      adSectionContainer1.appendChild(adBlock2);
    } else {
      adSectionContainer2.insertBefore(
        adBlock2,
        adSectionContainer2.firstElementChild
      );
    }
  } catch (e) {
    console.log(e);
    return;
  }
};
moveSectionsForMobile();
window.addEventListener("resize", moveSectionsForMobile);

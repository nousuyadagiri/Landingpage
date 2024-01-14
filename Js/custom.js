/* Start: scrolltopup */
const scrollToTopButton = document.getElementById("scrollToTopButton");

scrollToTopButton.addEventListener("click", () => {
  console.log("haefuai");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
/* End: scrolltopup */

/* Start: Owl carousel */
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true, // Enable navigation arrows
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
/* End: Owl carousel */

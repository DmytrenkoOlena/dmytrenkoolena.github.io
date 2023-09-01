mobileOnlySlider(".slider", 1000);

function mobileOnlySlider($slidername, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick",
      },
    ],
  };
  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  $('.testimonial-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000
    }
  );
  $('.client-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 15,
    asNavFor: '.testimonial-slider',
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 8
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 6
      }
    }
  ]
    }
  );
});
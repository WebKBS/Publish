/* 스와이퍼 */

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper2 = undefined;
function respons() {
  if (window.innerWidth <= 1024 && swiper2 == undefined) {
    swiper2 = new Swiper('.mySwiper2', {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1, //브라우저가 768보다 클 때
        },
        640: {
          slidesPerView: 2, //브라우저가 1024보다 클 때
        },
      },
    });
  } else if (window.innerWidth > 1024 && swiper2 != undefined) {
    swiper2.destroy();
    swiper2 = undefined;
  }
}
respons();

window.addEventListener('resize', function () {
  respons();
});

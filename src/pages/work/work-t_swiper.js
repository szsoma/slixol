import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function workswiper() {
    $(".slider-main_component").each(function (index) {
        const swiper = new Swiper($(this).find(".swiper")[0], {
          speed: 400,
          loop: false,
          autoHeight: false,
          centeredSlides: false,
          followFinger: true,
          freeMode: false,
          slideToClickedSlide: false,
          slidesPerView: 'auto',
          spaceBetween: 24,
          rewind: false,
          mousewheel: {
            forceToAxis: true
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true
          },
          breakpoints: {
            // mobile landscape
            480: {
              slidesPerView: "auto",
              spaceBetween: 16
            },
            // tablet
            768: {
              slidesPerView: "auto",
              spaceBetween: 24
            },
            // desktop
            992: {
              slidesPerView: "auto",
              spaceBetween: 24
            }
          },
          slideActiveClass: "is-active",
           slideDuplicateActiveClass: "is-active",
          navigation: {
            nextEl: $(this).find(".swiper-next")[0],
            prevEl: $(this).find(".swiper-prev")[0],
            disabledClass: "is-disabled"
          }
        });
      });

}
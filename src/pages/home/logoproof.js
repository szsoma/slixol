// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


export default function logoproof() {

    const swiperContainer = document.querySelector('.hero_logoproof');

    if (!swiperContainer) {
        console.error("Error: Swiper container not found.");
        return;
    }

    const swiper = new Swiper(swiperContainer, {
        slidesPerView: 'auto',
        spaceBetween: 64,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        }
    });

}
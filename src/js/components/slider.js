import { Swiper } from "swiper/bundle";

const swiper = new Swiper(".companies", {
	loop: true,
	autoplay: {
		delay: 700,
		disableOnInteraction: true,
	},
	slidesPerView: 2,
	spaceBetween: 6,
	centeredSlides: false,
	breakpoints: {
		420: {
			slidesPerView: 2.5,
		},
		550: {
			slidesPerView: 3.4,
		},
		600: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 4.3,
		},
		768: {
			slidesPerView: 5,
		},
		1100: {
			slidesPerView: 6,
		},
	},
});

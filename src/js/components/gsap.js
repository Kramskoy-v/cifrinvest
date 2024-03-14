import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

//анимация карточек кейсов
if (window.innerWidth >= 1440) {
	gsap.to(".cards__item", {
		y: (_, el) =>
			(1 - parseFloat(el.getAttribute("data-speed"))) *
			ScrollTrigger.maxScroll(window),
		scrollTrigger: {
			trigger: ".cases",
			start: "top 20%",
			endTrigger: ".cases",
			end: "bottom center",
			scrub: 0,
		},
	});
}

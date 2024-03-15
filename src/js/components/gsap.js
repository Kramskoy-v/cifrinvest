import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

//карточки infoWave
ScrollTrigger.create({
	trigger: ".cards__item--wave2",
	start: "top top",
	endTrigger: ".cards__item--wave1",
	end: "top top",
	pin: true,
});

//полоса логотипов в секции "о нас"
gsap.to(".aboutus__icons", {
	scrollTrigger: {
		trigger: ".aboutus__description",
		start: "top center",
		endTrigger: ".cases",
		end: "top center",
		scrub: true,
	},
	translateX: 0,
});

//элементы команды
gsap.to(".team__item", {
	scrollTrigger: {
		trigger: ".team",
		start: "top center",
		end: "+=100%",
		scrub: true,
	},
	opacity: 1,
	scale: 1,
	translateX: 0,
	stagger: 1,
});

gsap.from(".team__online", {
	scrollTrigger: {
		trigger: ".team",
		start: "top center",
		end: "+=100%",
		scrub: true,
	},

	opacity: 0,
	stagger: 1.5,
});

ScrollTrigger.create({
	trigger: ".team__title",
	start: "-10% top",
	endTrigger: ".advantages__title",
	end: "top center",
	pin: true,
});

//преимущества

gsap.to(".advantages__list", {
	scrollTrigger: {
		trigger: ".advantages",
		start: "top center",
		end: "+=50%",
		scrub: true,
	},
	translateX: -62,
});

// этапы работы
gsap.to(".stage__item", {
	scrollTrigger: {
		trigger: ".stage",
		start: "top center",
		end: "+=100%",
		scrub: true,
	},
	opacity: 1,
	scale: 1,
	translateX: 0,
	stagger: 1,
});

if (window.innerWidth >= 1440) {
	gsap.to(".cards__item--wave3", {
		scrollTrigger: {
			trigger: ".cards__item--wave2",
			start: "top top",
			endTrigger: ".cards__item--wave1",
			end: "top top",
			scrub: true,
		},
		yPercent: 55,
	});

	gsap.to(".cards__item", {
		y: (_, el) =>
			(1 - parseFloat(el.getAttribute("data-speed"))) *
			ScrollTrigger.maxScroll(window),
		scrollTrigger: {
			trigger: ".cases",
			start: "top 20%",
			endTrigger: ".cases",
			end: "bottom center",
			scrub: true,
		},
	});
}

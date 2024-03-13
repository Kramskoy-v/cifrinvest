// меню
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".btn-menu");

if (btnMenu) {
	btnMenu.addEventListener("click", () => {
		btnMenu.classList.toggle("_active");
		menu.classList.toggle("_active");
	});
}

// аккордеон
const questions = document.querySelectorAll(".faq__item");

if (questions && questions.length > 0) {
	questions[0].classList.add("_is-open");

	questions.forEach((question) => {
		question.addEventListener("click", () => {
			questions.forEach((item) => {
				if (item.classList.contains("_is-open")) {
					item.classList.remove("_is-open");
				}
			});
			question.classList.add("_is-open");
		});
	});
}

// открытие модалки при клике на карточки волн
const cardWaveBtns = document.querySelectorAll(".cards__item");
const overlay = document.querySelector(".overlay");
const modalWave = document.querySelector(".modal-wave");
const closeModal = document.querySelector(".modal__close-btn");

const toggleOverlay = () => {
	if (overlay.classList.contains("_is-active")) {
		overlay.classList.remove("_is-active");
		modalWave.classList.remove("_is-active");
		document.body.style.overflow = null;
	} else {
		overlay.classList.add("_is-active");
		modalWave.classList.add("_is-active");
		document.body.style.overflow = "hidden";
	}
};

if (cardWaveBtns) {
	cardWaveBtns.forEach((cardBtn) => {
		cardBtn.addEventListener("click", () => {
			toggleOverlay();
		});
	});
}

document.addEventListener("keydown", (event) => {
	if (event.code === "Escape" && overlay.classList.contains("_is-active")) {
		toggleOverlay();
	}
});

if (overlay || closeModal) {
	overlay.addEventListener("click", toggleOverlay);
	closeModal.addEventListener("click", toggleOverlay);
}

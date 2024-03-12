// меню
const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.btn-menu')

btnMenu.addEventListener('click', () => {
	btnMenu.classList.toggle('_active');
	menu.classList.toggle('_active');
})

// аккордеон
const questions = document.querySelectorAll('.faq__item');

if (questions && questions.length > 0) {
	questions[0].classList.add('_is-open');

	questions.forEach((question) => {
		question.addEventListener('click', () => {
			questions.forEach((item) => {
				if (item.classList.contains('_is-open')) {
					item.classList.remove('_is-open');
				}
			});
			question.classList.add('_is-open');
		});
	});
}

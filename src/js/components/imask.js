import IMask from "imask";

const phoneInputs = document.querySelectorAll("input[data-phone]");

phoneInputs.forEach((element) => {
	const maskOptions = {
		mask: "+{7} 000 000 00 00",
	};
	const mask = IMask(element, maskOptions);
});

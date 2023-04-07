const formRef = document.querySelector(".footer__subscripton");

formRef.addEventListener("submit", (e) => {
	e.preventDefault();
	e.target.reset();
});

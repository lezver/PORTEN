const menuBtnRef = document.querySelector(".nav__btn");
const menuRef = document.querySelector(".nav__items");

const toggleMenu = (e) => menuRef.classList.toggle("toggle-menu");

menuBtnRef.addEventListener("click", toggleMenu);

const toggleOfClass = (e) => {
	console.log(e.target);
	if (
		e.target.className === "nav__link" ||
		e.target.className === "nav__link nav__link--active"
	)
		menuRef.classList.remove("toggle-menu");
};

menuRef.addEventListener("click", toggleOfClass);

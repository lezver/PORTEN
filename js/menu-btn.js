const menuBtnRef = document.querySelector(".nav__btn");
const menuRef = document.querySelector(".nav__items");
// const burgerBtnRef = document.querySelector(".burger");
// const crossBtnRef = document.querySelector(".cross");

const [burger, cross] = menuBtnRef.children;

// console.log(burger);

const toggleMenu = () => {
	menuRef.classList.toggle("toggle-menu");
	burger.classList.toggle("burger");
	cross.classList.toggle("cross");
};

menuBtnRef.addEventListener("click", toggleMenu);

const toggleOfClass = (e) => {
	if (
		e.target.className === "nav__link" ||
		e.target.className === "nav__link nav__link--active"
	)
		menuRef.classList.remove("toggle-menu");
	burger.classList.remove("burger");
	cross.classList.add("cross");
};

menuRef.addEventListener("click", toggleOfClass);

import { sesonsSection, newArrivals } from "./watches.js";

const seasonLi = sesonsSection.reduce(
	(acc, { srcJpg, srcsetWepb, srcsetJpg, name, price }) =>
		acc +
		`
		<li class="season__item">
			<a href="" class="season__link">
				<picture>
					<source srcset="${srcsetWepb}" />
					<img
						srcset="${srcsetJpg}"
						src="${srcJpg}"
						alt="Наручний годинник"
					/>
				</picture>
				<p>${name}</p>
				<span>${price}</span>
			</a>
		</li>
		`,
	""
);
const seasonItemsRef = document.querySelector(".season__items");

seasonItemsRef.insertAdjacentHTML("afterbegin", seasonLi);

const newArrivalsLi = newArrivals.reduce(
	(acc, { srcJpg, srcsetWepb, srcsetJpg, name, price }) =>
		acc +
		`
		<li class="new-arrivals__item">
			<a href="" class="new-arrivals__link">
				<picture>
					<source srcset="${srcsetWepb}" />
					<img
						srcset="${srcsetJpg}"
						src="${srcJpg}"
						alt="Наручний годинник"
					/>
				</picture>
				<p>${name}</p>
				<span>${price}</span>
			</a>
		</li>
		`,
	""
);
const newArrivalsItemsRef = document.querySelector(".new-arrivals__items");

newArrivalsItemsRef.insertAdjacentHTML("afterbegin", newArrivalsLi);

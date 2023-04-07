import { sesonsSection, newArrivals, articelsBlock } from "./library.js";

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

const articelsBlockLi = articelsBlock.reduce(
	(acc, { srcJpg, srcsetJpg, srcsetWepb, alt, title, paragraph, span }) =>
		acc +
		`
		<li>
			<div class="articles__item">
				<picture>
					<source srcset="${srcsetWepb}" />
					<img
						srcset="${srcsetJpg}"
						src="${srcJpg}"
						alt="${alt}" 
					/>
				</picture>
				<div class="articles__info">
					<h3>${title}</h3>
					<p>${paragraph}</p>
					<div class="articles__box">
						<a href="">Читати</a>
						<span>${span}</span>
					</div>
				</div>
			</div>
		</li>
		`,
	""
);

const articelsItemsRef = document.querySelector(".articles__items");

articelsItemsRef.insertAdjacentHTML("afterbegin", articelsBlockLi);

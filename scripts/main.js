import { FishList, mostHolyFish, soldierFish, nonHolyFish } from "./fish/FishList.js";
import { FavoriteFishSpots } from "./locations/LocationsList.js";
import { CleaningTipList, HarvestingTipList, ScubaTipList } from "./tips/TipsList.js";

// import { fishesList } from "./database.js";

document.addEventListener("DOMContentLoaded", () => {
	let parentHTMLElement = document.querySelector(".fish-list");

	const holyFishes = mostHolyFish();
	const soldierFishes = soldierFish();
	const nonHolyFishes = nonHolyFish();

	parentHTMLElement.innerHTML += FishList(holyFishes, "Holy Fishes");
	parentHTMLElement.innerHTML += FishList(soldierFishes, "Soldier Fishes");
	parentHTMLElement.innerHTML += FishList(nonHolyFishes, "Non-Holy Fishes");

	const tankTipsContainer = document.querySelector(".tank-cleaning-tips");
	tankTipsContainer.innerHTML += CleaningTipList();

	const scubaTipsContainer = document.querySelector(".scuba-diving-tips");
	scubaTipsContainer.innerHTML += ScubaTipList();

	const harvestingTipsContainer = document.querySelector(".harvesting-tips");
	harvestingTipsContainer.innerHTML += HarvestingTipList();

	const favoriteLakesContainer = document.querySelector(".fav-fishing-spots");
	favoriteLakesContainer.innerHTML += FavoriteFishSpots();
});

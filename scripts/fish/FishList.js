import { fishesList } from "../database.js";

export const FishList = (fishes) => {
	// const fishes = fishesList();

	let htmlString = '<article class="fishList">';

	for (const fish of fishes) {
		htmlString += `<section class="fish-cards">
                
        <h3 class="fish-species">${fish.species}</h3>
        <div class="fish-deets">
            <div><img alt="Picture of ${fish.image}" class="fish-image" src="${fish.image}"></div>
            <div class="fish-specs">
                <ul class="fish-specs-list">
                    <li>${fish.name}</li>
                    <li>${fish.length}</li>
                    <li>${fish.diet}</li>
                    <li>${fish.harvestingLocation}</li>
                </ul>
            </div>
        </div>
    </div>
    <hr />
        </section>`;
	}
	htmlString += "</article>";

	return htmlString;
};

export const mostHolyFish = () => {
	const holyFish = [];
	const addedIds = new Set();
	const fishes = fishesList();

	for (const fish of fishes) {
		if (fish.length % 3 === 0 && !addedIds.has(fish.id)) {
			holyFish.push(fish);
			addedIds.add(fish.id);
		}
	}

	return holyFish;
};

export const soldierFish = () => {
	const soldierFish = [];
	const addedIds = new Set();
	const fishes = fishesList();

	for (const fish of fishes) {
		if (fish.length % 5 === 0 && !addedIds.has(fish.id)) {
			soldierFish.push(fish);
			addedIds.add(fish.id);
		}
	}

	return soldierFish;
};

export const nonHolyFish = () => {
	const nonHolyFish = [];
	const addedIds = new Set();
	const fishes = fishesList();

	for (const fish of fishes) {
		if (fish.length % 5 === 0 && !addedIds.has(fish.id)) {
			nonHolyFish.push(fish);
			addedIds.add(fish.id);
		}
	}

	return nonHolyFish;
};

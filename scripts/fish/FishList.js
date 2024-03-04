import { fishesList } from "../database.js";

export const FishList = () => {
	const fishes = fishesList();

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
                    <li>${fish.harvestLocation}</li>
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

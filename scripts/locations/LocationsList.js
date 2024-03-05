import { favLocations } from "../database.js";

console.log(favLocations())

export const FavoriteFishSpots= () => {
	const lakes = favLocations();
	let htmlString = `
        <div>
        <h3 class="list-header">Favorite Fishing Spots</h3>
        <div class="fishing-spots-section">
		<ul class="lake-list">
    `;
	for (const lake of lakes) {
		htmlString += `
            <li class="lake-names">
            ${lake}
            </li>
        `;
	}

	htmlString += `
        </ul>
        </div>
        </div>
        `;

	return htmlString;
};
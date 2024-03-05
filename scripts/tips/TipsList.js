import { tankCleaningArray, harvestingTipsArray, divingTipsArray, quotesArray, favLocations } from "../database.js";

export const CleaningTipList = () => {
	const tips = tankCleaningArray();
	let htmlString = `
        <aside>
        <h3 class="list-header">Tank Cleaning Tips</h3>
        <ul class="tips-list">
    `;
	for (const tip of tips) {
		htmlString += `
            <li class="tips-card">
                <h4>${tip.title}</h4>
                ${tip.description}
            </li>
        `;
	}

	htmlString += `
        </ul>
        </aside>
        `;

	return htmlString;
};

export const ScubaTipList = () => {
	const tips = divingTipsArray();
	let htmlString = `
        <aside>
        <h3 class="list-header">Scuba Diving Tips</h3>
        <ul class="tips-list">
    `;
	for (const tip of tips) {
		htmlString += `
            <li class="tips-card">
                <h4>${tip.title}</h4>
                ${tip.description}
            </li>
        `;
	}

	htmlString += `
        </ul>
        </aside>
        `;

	return htmlString;
};

export const HarvestingTipList = () => {
	const tips = harvestingTipsArray();
	let htmlString = `
        <aside>
        <h3 class="list-header">Fish Harvesting Tips</h3>
        <ul class="tips-list">
    `;
	for (const tip of tips) {
		htmlString += `
            <li class="tips-card">
                <h4>${tip.title}</h4>
                ${tip.description}
            </li>
        `;
	}

	htmlString += `
        </ul>
        </aside>
        `;

	return htmlString;
};



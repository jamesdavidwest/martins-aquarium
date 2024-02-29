const fishList = [
	{
		image: "bass.jpg",
		species: "Largemouth Bass",
		length: "15 inches",
		name: "Biggie",
		harvestingLocation: "Dale Hollow Lake",
		diet: "Small fish, insects, and crayfish",
	},
	{
		image: "crappie.jpg",
		species: "Crappie",
		length: "10 inches",
		name: "Slim",
		harvestingLocation: "Percy Priest Lake",
		diet: "Small fish, insects, and crustaceans",
	},
	{
		image: "catfish.jpg",
		species: "Channel Catfish",
		length: "20 inches",
		name: "Whiskers",
		harvestingLocation: "Chickamauga Lake",
		diet: "Insects, crustaceans, and small fish",
	},
];

const quoteList = {
	quotes: [
		{
			quote: "The sea calls to the brave and the curious alike. Dive deep and let your spirit soar with the waves.",
			author: "Captain Diver Dan",
		},
		{
			quote: "Life is an ocean, and every dive is a journey into the unknown. Embrace the adventure and let the currents guide you.",
			author: "Oceanic Oracle",
		},
		{
			quote: "Beneath the surface lies a world of wonder waiting to be explored. Dive in with an open heart and discover the magic of the deep.",
			author: "Mermaid Melody",
		},
	],
	scubaDivingTips: [
		"Stay calm and conserve your air. Control your breathing and move slowly to maximize your dive time and enjoy the underwater scenery.",
		"Maintain proper buoyancy to protect delicate marine life and avoid damaging coral reefs. Practice good buoyancy control to minimize your impact on the environment.",
		"Always plan your dive and dive your plan. Make sure you're familiar with the dive site, check the weather and currents, and communicate with your dive buddy to ensure a safe and enjoyable experience.",
	],
	fishHarvestingTips: [
		"Handle fish with care to ensure their freshness and quality. Use a soft landing net or wet hands to avoid damaging their delicate scales and flesh.",
		"Know your local regulations and practice responsible fishing. Respect catch limits, release undersized or protected species, and use sustainable fishing methods to preserve marine ecosystems.",
		"Keep your fishing gear clean and well-maintained for optimal performance. Regularly check your hooks, lines, and reels to prevent equipment failure and ensure successful catches.",
	],
};

export const FishList = () => {
	return fishList.map((fish) => ({ ...fish }));
};

export const QuoteList = () => {
	return quoteList.quotes.map((quotes) => ({ ...quotes }));
};

export const DivingTipsList = () => {
	return quoteList.scubaDivingTips.map((scubaTips) => ({ ...scubaTips }));
};

export const HarvestingTipsList = () => {
	return quoteList.fishHarvestingTips.map((harvestTips) => ({ ...harvestTips }));
};

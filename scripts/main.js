import { FishList } from "./fish/FishList.js";

const parentHTMLElement = document.querySelector(".fish-list");

parentHTMLElement.innerHTML = FishList();

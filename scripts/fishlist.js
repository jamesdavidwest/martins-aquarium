import { getFish } from './fish.js'
export const FishList = () => {
    const fishes = getFish()
    let htmlString = '<article class="fishList">'
    for (const fish of fishes) {
        htmlString += `<section class="fish card">
        <div class="imageSize"><img class="fish__image image--card" src="${fish.image}" /></div>
        <div class="fish__name">${fish.name}</div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.length}</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__diet">${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
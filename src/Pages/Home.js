import { getData } from "../utils/getData.js";

const Home = async () => {
    const characters = await getData();
    const view = /*html*/`
        <div class="Characters grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-24 px-4 ps-10 py-12 scale-85 me-0 bg-custom-radial w-full">
        ${characters.results.map(character =>            
            `<article class="Character-item hover:shadow-xl hover:scale-105 transition-transform duration-300 border-4 border-custom-border rounded-lg">
                <a class="flex flex-col items-center hover:shadow-lg relative" href="#/${character.id}/">
                    <img class="rounded-md w-full h-auto" src="${character.image}" alt="${character.name}"/>
                    <div class="absolute bottom-0 w-full bg-custom-yellow bg-opacity-85 flex flex-col items-center py-3 rounded-sm">
                        <h2 class="font-bold">${character.name}</h2>
                    </div>
                </a>
            </article>
        `).join('')}
        </div>
    `;
    return view;
}


export {Home};
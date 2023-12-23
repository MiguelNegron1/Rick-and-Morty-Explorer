import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import { getData } from "../utils/getData.js";
import { getHash } from "../utils/getHash.js";


const Character = async () => {
    const id = getHash();
    const character = await getData(id);


    const view = /*html*/`
    <div class='sm:flex sm:justify-center sm:items-center min-h-screen md:flex flex-col items-center md:gap-y-20'>
    <div class="sm:mt-0  sm:h-96  sm:grid sm:grid-rows-2 sm:gap-y-4 sm:place-items-center p-4">
        <div class="Characters-Inner  justify-center  items-center bg-blue-200 p-8  rounded-lg border-8 border-solid border-custom-image-border w-max mb-24 py-12 
        sm:scale-[.35] sm:flex sm:mt-2 sm:flex-col sm:items-center md:scale-[.45] md:flex-row lg:scale-[.71]">
            <article class="flex justify-center  items-center  bg-  rounded-lg shadow-lg mx-6 p-12  scale-100 border-4 border-white bg-red-300">
                <img class="  rounded-full scale-100" src="${character.image}" alt="${character.name}"/>
            </article>
            <article class="Characters-card mx-6  sm:p-12 sm:ms-40 sm:pt-12">
                <h2 class="text-5xl font-bold text-gray-800 mb-6">${character.name}</h2>

                <ul class="text-gray-800  font-black">
                    <li class="mb-2 text-2xl">Episodes: <span class="font-bold">${character.episode.length}</span> </li>
                    <li class="mb-2 text-2xl">Status: <span class="font-bold">${character.status}</span></li class=>
                    <li class="mb-2 text-2xl">Species: <span class="font-bold">${character.species}</span></li>
                    <li class="mb-2 text-2xl">Gender: <span class="font-bold">${character.gender}</span></li class=>
                    <li class="mb-2 text-2xl">Origin: <span class="font-bold">${character.origin.name}</span></li>
                    <li class="text-2xl">Last Location: <span class="font-bold">${character.location.name}</span></li>
                </ul>
            </article>
        </div>
        <a href="/" class="pointer">
        <div class="w-40 h-12 bg-custom-image-border rounded-lg grid grid-cols place-items-center border-double border-8  border-blue-200">
            <svg  fill="#fff" xmlns="http://www.w3.org/2000/svg" 
            \height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
        </div>
        </a>
    </div>
    </div>
    `;
    return view;
}

export {Character};
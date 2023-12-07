import { getData } from "../utils/getData.js";
import { getHash } from "../utils/getHash.js";


const Character = async () => {
    const id = getHash();
    const character = await getData(id);


    const view = /*html*/`
        <div class="Characters-Inner">
            <article class="Characters-card">
                <img src="${character.image}" alt="${character.name}"/>
                <h2>${character.name}</h2>
            </article>
            <article class="Characters-card">
                <ul>
                    <li>Episodes: <span>${character.episode.length}</span> </li>
                    <li>Status: <span>${character.status}</span></li>
                    <li>Species: <span>${character.species}</span></li>
                    <li>Gender: <span>${character.gender}</span></li>
                    <li>Origin: <span>${character.origin.name}</span></li>
                    <li>Last Location: <span>${character.location.name}</span></li>
                </ul>
            </article>
        </div>
    `;
    return view;
}

export {Character};
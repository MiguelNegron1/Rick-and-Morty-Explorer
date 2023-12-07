import { URL } from "../config.js/api.js";


const getData = async( id) => {
    const apiURL = id ? `${URL}${id}` : URL;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Fetch Error${error}`);
    }
}

export {getData};
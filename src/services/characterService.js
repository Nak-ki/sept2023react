import {apiService} from "./apiService";
import {urls} from "../constants/urls/urls";


const characterService = {
    getAll:()=> apiService.get(urls.character.base),
    getById:(id) => apiService.get(urls.character.byId(id)),
    getByLink:(link) => apiService.get(urls.character.byLink(link))
}

export {
    characterService
}
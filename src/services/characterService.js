import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getById: (ids) => apiService.get(urls.character.byIds(ids))
}

export {
    characterService
}
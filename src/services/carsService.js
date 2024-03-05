import {apiService} from "./apiService";
import {urls} from "../constants";

const carsService = {
    getAll:() => apiService.get(urls.cars.base),
    createC: (data)=> apiService.post(urls.cars.base, data),
    update: (id, data) => apiService.put(urls.cars.byId(id), data),
    deleteById: (id)=> apiService.delete(urls.cars.byId(id))

}

export {
    carsService
}
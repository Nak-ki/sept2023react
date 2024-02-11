import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carsService = {
    getAll: ()=> apiService.get(urls.cars.base),
    getById: (id)=> apiService.get(urls.cars.byID(id)),
    create: (data)=> apiService.post(urls.cars.base, data),
    update: (id, data) => apiService.put(urls.cars.byID(id), data),
    deleteById: (id)=> apiService.delete(urls.cars.byID(id))
}

export {carsService}
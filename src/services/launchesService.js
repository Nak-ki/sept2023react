import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


let launchesService = {
    getAll: () => axiosService(urls.launches.base),
    getById: (flight_number) => axiosService(urls.launches.byId(flight_number))
}

export {launchesService}
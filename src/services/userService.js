import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


let userService = {
    getAll: () =>axiosService.get(urls.users.base),
    getById:(id)=>axiosService.get(urls.users.byId(id)),
    create:(data)=> axiosService.post(urls.users.base, data)
}
export {userService}

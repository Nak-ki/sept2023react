import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


let commentsService = {
    getAll: ()=>axiosService.get(urls.comments.base),
    getById: (id)=> axiosService.get(urls.comments.byId(id)),
    create: (data)=> axiosService.post(urls.comments.base, data)
}

export {commentsService}


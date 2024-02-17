import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";
import {UsersPage} from "./pages/UsersPage";
import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostUserPage} from "./pages/PostUserPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {postService} from "./services/postService";
import {PostCommentsPage} from "./pages/PostCommentsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayouts/>, children: [
            {index:true, element:<Navigate to={'users'}/>},
            {
                path: 'users', element:<UsersPage/>,
                loader: () => userService.getAll()},
            {
                path:'users/:id', element:<UserDetailsPage/>,
                loader: ({params: {id}}) => userService.getById(id), children:[
                    {
                        path:'posts', element:<PostUserPage/>,
                        loader:({params:{id}}) =>userService.getPostsById(id)}]},
            {
                path:'posts/:id', element:<PostDetailsPage/>,
                loader:({params: {id}}) => postService.getById(id), children: [
                    {
                        path:'comments', element: <PostCommentsPage/>,
                        loader:({params: {id}}) => postService.getCommentsById(id)
                    }
                ]}
        ]}
])

export {router}
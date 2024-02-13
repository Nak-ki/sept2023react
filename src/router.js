import {createBrowserRouter} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {path: '', element: <MainLayouts/>, children:[
            {path:'todos', element:<TodosPage/>},
            {path:'albums', element:<AlbumsPage/>},
            {path:'comments', element:<CommentsPage/>, children:[
                    {path: "posts", element:<PostPage/>}
                ]},

        ]}
])

export {router}
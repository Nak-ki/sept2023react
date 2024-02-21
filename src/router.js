import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {CharacterPage, EpisodePage} from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index:true, element: <Navigate to={'episodes'}/>
            },
            {
                path: 'episodes', element:<EpisodePage/>

            },
            {
                path: 'characters', element:<CharacterPage/>
            }

        ]
    }
])

export {router}
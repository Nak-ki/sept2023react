import {Outlet, useLoaderData} from "react-router-dom";

import {Posts} from "../components/PostsContainer/Posts/Posts";

const PostUserPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <Posts posts={data}/>
            <Outlet/>
        </div>
    );
};

export {PostUserPage};

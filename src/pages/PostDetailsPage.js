import {Outlet, useLoaderData} from "react-router-dom";

import {PostDetails} from "../components/PostsContainer/PostDetails/PostDetails";

const PostDetailsPage = () => {

    const {data} = useLoaderData()
    return (
        <div>
            <PostDetails post={data}/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};

import {useLoaderData} from "react-router-dom";

import {Comments} from "../components/CommentsContainer/Comments/Comments";

const PostCommentsPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <Comments comments={data}/>
        </div>
    );
};

export {PostCommentsPage};

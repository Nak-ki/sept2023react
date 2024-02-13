import {useEffect, useState} from "react";
import {postsService} from "../../../services/PostsService";
import {useLocation} from "react-router-dom";

import {Post} from "../Post/Post";
import css  from './Posts.module.css'

const Posts = () => {
    const [post, setPost] = useState({})

   const {state:{postId}} = useLocation()

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);
    return (
        <div className={css.posts}>
            <Post post={post}/>
        </div>
    );
};

export {Posts};

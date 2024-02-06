import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";
import './Posts.module.css'

const Posts = () => {

    const [posts, setPosts] = useState([])

    const [postDetails, setPostDetails] = useState()

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, []);

    const ShowDetails = (post) => {
        setPostDetails(post)
    }

    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id} ShowDetails={ShowDetails}/>)}
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};

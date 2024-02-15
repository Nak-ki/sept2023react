import {Post} from "../Post/Post";
import css from './Posts.module.css'

const Posts = ({posts}) => {


    return (
        <div className={css.postss}>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};

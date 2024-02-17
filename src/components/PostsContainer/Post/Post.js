import {useNavigate} from "react-router-dom";

import css from './Post.module.css'

const Post = ({post}) => {

    const {id, title} = post

    const navigate = useNavigate()

    return (
        <div className={css.post}>
            <p>Id: {id}</p>
            <h3>Title: {title}</h3>
            <button onClick={() => navigate('/posts/' + id.toString() + '/comments', {state:{id}})}>Show Post Details</button>
        </div>
    );
};

export {Post};

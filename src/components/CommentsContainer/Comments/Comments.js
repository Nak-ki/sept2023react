import {useEffect, useState} from "react";

import {commentsService} from "../../../services/commentsService";
import {Comment} from "../Comment/Comment";
import css from './Comments.module.css'


const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))

    }, []);

    return (
        <div className={css.comments}>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Comments};

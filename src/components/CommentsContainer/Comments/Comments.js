import {Comment} from "../Comment/Comment";
import  css from './Comments.module.css'

const Comments = ({comments}) => {


    return (
        <div className={css.comments}>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Comments};

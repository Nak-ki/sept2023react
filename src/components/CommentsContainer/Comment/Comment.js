import css from './Comment.module.css'
const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment

    return (
        <div className={css.comment}>
            <p>PostId: {postId}</p>
            <h3>Id: {id}</h3>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Comment};

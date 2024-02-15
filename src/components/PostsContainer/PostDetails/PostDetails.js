import css from './PostDetails.module.css'

const PostDetails = ({post}) => {

    const {id, userId, title, body} = post

    return (
        <div className={css.postDet}>
            <p>Id: {id}</p>
            <h3>UserId: {userId}</h3>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export {PostDetails};

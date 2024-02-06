import css from './PostDetails.module.css'

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails

    return (
        <div className={css.postDet}>
            <h3>UserId: {userId}</h3>
            <h3>ID: {id}</h3>
            <h2>Title: {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export {PostDetails};

const PostDetails = ({post}) => {

    const {id, userId, title, body} = post

    return (
        <div>
            <p>id: {id}</p>
            <h3>userId: {userId}</h3>
            <h3>title: {title}</h3>
            <p>body: {body}</p>
        </div>
    );
};

export {PostDetails};

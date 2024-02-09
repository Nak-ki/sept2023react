const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment

    return (
        <div>
            <p>PostId: {postId}</p>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Text: {body}</p>
        </div>
    );
};

export {Comment};

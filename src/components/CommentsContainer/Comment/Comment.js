const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment

    return (
        <div>
            <p>postId: {postId}</p>
            <h3>id: {id}</h3>
            <h3>name: {name}</h3>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {Comment};

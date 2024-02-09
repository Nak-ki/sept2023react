const User = ({user}) => {
    const {id, name, username, email } = user
    return (
        <div>
            <p>id{id}</p>
            <p>name{name}</p>
            <h4>username{username}</h4>
            <p>email{email}</p>

        </div>
    );
};

export {User};

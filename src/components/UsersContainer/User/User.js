import {useNavigate} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user
    const navigate = useNavigate()

    return (
        <div>
            <h3>id: {id}  name: {name}</h3>
            <button onClick={() => navigate(id.toString(), {state:{user}}) }>Show details</button>
        </div>
    );
};

export {User};

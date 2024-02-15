import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post

    const navigate = useNavigate()

    return (
        <div>
            <h3>id: {id}</h3>
            <h3>title: {title}</h3>
            <button onClick={() => navigate(id.toString() + '/comments', {state:{id}})}>Show Post Details</button>
        </div>
    );
};

export {Post};

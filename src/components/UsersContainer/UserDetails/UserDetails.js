import {useNavigate} from "react-router-dom";

const UserDetails = ({user}) => {

    const  {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}} = user

    const navigate = useNavigate()

    return (
        <div>
            <h3>id: {id}</h3>
            <p>name: {name}</p>
            <h3>username: {username}</h3>
            <p>email: {email}</p>
            <h3>address: </h3>
            <p>street: {street}</p>
            <p>suite: {suite}</p>
            <p>city: {city}</p>
            <p>zipcode: {zipcode}</p>
            <h3>geo: </h3>
            <p>lat: {lat}</p>
            <p>lng: {lng}</p>
            <button onClick={() => navigate('posts', {state:{id}})}>Post Of Current User</button>
        </div>
    );
};

export {UserDetails};

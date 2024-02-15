import {useNavigate} from "react-router-dom";

import css from './UserDetails.module.css'

const UserDetails = ({user}) => {

    const  {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}} = user

    const navigate = useNavigate()

    return (
        <div className={css.userDet}>
            <h3>Id: {id}</h3>
            <p>Name: {name}</p>
            <h3>Username: {username}</h3>
            <p>Email: {email}</p>
            <h3>Address: </h3>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p>
            <p>Zipcode: {zipcode}</p>
            <h3>Geo: </h3>
            <p>Lat: {lat}</p>
            <p>Lng: {lng}</p>
            <button onClick={() => navigate('posts', {state:{id}})}>Post Of Current User</button>
        </div>
    );
};

export {UserDetails};

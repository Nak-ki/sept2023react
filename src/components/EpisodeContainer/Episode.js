import {useNavigate} from "react-router-dom";

import css from './Episode.module.css'

const Episode = ({episode}) => {

    const {id, name, episode:series, characters} = episode

    const navigate = useNavigate()

    const epChar =() => {
        localStorage.setItem('link', JSON.stringify(characters))
        navigate('/characters')
    }

    return (
        <div className={css.episode}>
            <h3>id: {id}</h3>
            <h3>name: {name}</h3>
            <h3>episode: {series}</h3>
            <button onClick={epChar}>Show characters this episode</button>
        </div>
    );
};

export {Episode};

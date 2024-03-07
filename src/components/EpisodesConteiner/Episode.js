import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {characterActions, episodeActions} from "../../store/slices";
import css from './Episode.module.css'

const Episode = ({episode}) => {
    const {id, episode:series,  characters, name} = episode
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const getCharacters = () => {
        const ids = characters.map(character => character.split("/").slice(-1)[0]).join(",")
        dispatch(characterActions.getByIds({ids}))
        dispatch(episodeActions.setSeriesName(name))
        navigate(`/characters/${ids}`)

    }
    return (
        <div className={css.episode} onClick={getCharacters}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Series: {series}</p>
        </div>
    );
};

export {Episode};

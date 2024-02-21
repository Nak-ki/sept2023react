import {useEffect, useState} from "react";

import {characterService} from "../../services";
import css from './Character.module.css'

const Character = ({link}) => {

    const [characters, setCharacters] = useState([])

    const {id, name, status, species, image} = characters

    useEffect(() => {
        characterService.getByLink(link).then(({data})=> setCharacters(data))

    }, [link]);


    return (
        <div className={css.character}>
            <h3>id: {id}</h3>
            <h3>name: {name}</h3>
            <h3>status: {status}</h3>
            <h3>species: {species}</h3>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};

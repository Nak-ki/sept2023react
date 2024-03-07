import {useSelector} from "react-redux";

import {Character} from "./Character";
import css from './Characters.module.css'

const Characters = () => {
   const {characters} = useSelector(state => state.characters)


    return (
        <div className={css.characters}>
            {characters.map(character => <Character character={character} key={character.ids}/>)}
        </div>
    );
};

export {Characters};

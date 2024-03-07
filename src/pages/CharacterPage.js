
import {useSelector} from "react-redux";

import {Characters} from "../components/CharactersConteiner";


const CharacterPage = () => {
   const {seriesName} = useSelector(state => state.episodes)

    return (
        <div>
            {seriesName&&<div><h1>{seriesName}</h1></div>}
            <Characters/>
        </div>
    );
};

export {CharacterPage};

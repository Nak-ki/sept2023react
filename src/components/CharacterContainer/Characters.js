import {Character} from "./Character";
import css from './Characters.module.css'


const Characters = () => {

    const characterArr = JSON.parse (localStorage.getItem('link'))
    console.log(characterArr)



    return (
        <div className={css.characters}>
            {characterArr.map((link, index) => <Character link={link} key={index} />)}
        </div>
    );
};

export {Characters};

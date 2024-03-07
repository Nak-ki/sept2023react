import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {usePageQuery} from "../../hooks";
import {episodeActions} from "../../store/slices";
import {Episode} from "./Episode";
import css from './Episodes.module.css'

const Episodes = () => {

   const {episodes, prev, next} = useSelector(state => state.episodes)
    const dispatch = useDispatch()
   const {page, prevPage, nextPage} = usePageQuery()


    useEffect(() => {
        dispatch(episodeActions.getAll({page}))

    }, [page, dispatch]);

     console.log(episodes)

    return (
        <div className={css.episodes}>
            <div className={css.ep}>
            {episodes.map(episode => <Episode episode={episode} key={episode.id}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!prev} onClick={prevPage}>Prev</button>
                <button  disabled={!next} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {Episodes};

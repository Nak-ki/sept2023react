import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";


import {episodeService} from "../../services";
import {Episode} from "./Episode";
import css from './Episodes.module.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    console.log(episodes)

    const [prevNext, setPrevNext] = useState({prev:null, next:null})

    const [query,setQuery] = useSearchParams({page:'1'})

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data.results)
            setPrevNext({prev: data.info.prev, next: data.info.next})
        })

    }, [query]);

    const prev = () =>  {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () =>  {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }
    return (
        <div className={css.episodes}>
            {episodes.map((episode) => <Episode episode={episode} key={episode.id}/>)}
            <div className={css.buttons}>
                <button disabled={!prevNext.prev} onClick={prev}>Previous</button>
                <button disabled={!prevNext.next} onClick={next}>Next</button>
            </div>
        </div>
    );
};

export {Episodes};

import {useEffect, useState} from "react";
import {launchesService} from "../../services/launchesService";
import {Launch} from "../Launch/Launch";
import css from './Launches.module.css'


const Launches = () => {
    const [launches, setLaunches] = useState([])


    useEffect(() => {
        launchesService.getAll().then(({data}) => setLaunches(data))
    }, []);

    const filterLaunch = launches.filter(launch => launch.launch_year !== '2020')

    return (
        <div className={css.launches}>
            {filterLaunch.map((launch,index) => <Launch launch={launch} key={index}/>)}
        </div>
    );
};

export {Launches};

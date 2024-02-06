import css from './Launch.module.css'

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch

    return (
        <div className={css.launch}>
            <h2>Mission name: {mission_name}</h2>
            <h3>Year: {launch_year}</h3>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};

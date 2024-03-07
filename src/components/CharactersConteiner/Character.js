import css from './Character.module.css'
const Character = ({character}) => {
    const {id, name, image} = character

    return (
        <div className={css.character}>
            <p>id: {id}</p>
            <h3>Name: {name}</h3>
            <img src={image} alt={name}/>

        </div>
    );
};

export {Character};

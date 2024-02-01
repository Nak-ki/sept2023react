import './Characrer.css'

const Character = ({character}) => {
    return (
        <div className= 'charact'>
           <h2>{character.id}. {character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <img src={character.image} alt={character.name}/>
        </div>
    );
};

export {Character};

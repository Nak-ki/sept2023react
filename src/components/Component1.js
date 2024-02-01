import "./Component1.css";

const Component1 = ({name,surname,age,info,image}) => {
    return (
        <div className='simpson'>
            <h2>{name} {surname}</h2>
            <h3>age: {age}</h3>
            <img src={image} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export {Component1};
    
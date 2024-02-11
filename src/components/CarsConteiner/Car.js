import {carsService} from "../../services/carsService";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car

    const deleteCar = async () => {
        await carsService.deleteById(id)
        setTrigger(prev=>!prev)
    }

    return (
        <div>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>Year: {year}</p>
            <p>Price: {price}</p>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>

        </div>
    );
};

export {Car};

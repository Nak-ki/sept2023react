import {useDispatch} from "react-redux";

import {carsService} from "../../services";
import {carActions} from "../../store";

const Car = ({car}) => {
   const {id, brand, price, year} = car

    const dispatch = useDispatch()


    const del = async () =>{
       await carsService.deleteById(id)
        // dispatch(carActions.setTrigger(prev => !prev))
   }



    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => dispatch(carActions.setCarFoUpdate(car))}>Update</button>
            <button onClick={del}>Delete</button>

        </div>
    );
};

export {Car};

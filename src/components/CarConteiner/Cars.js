import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsService} from "../../services";
import {carActions} from "../../store";
import {Car} from "./Car";


const Cars = () => {
    const {cars, trigger, carForUpdate} = useSelector(state => state.cars)
    const dispatch = useDispatch()

    useEffect(() => {
        carsService.getAll().then(({data}) => dispatch(carActions.setCars(data)))
    }, [dispatch, trigger]);

    console.log(cars)

    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};

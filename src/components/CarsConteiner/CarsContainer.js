import {useEffect, useState} from "react";

import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";
import {carsService} from "../../services/carsService";

const CarsContainer = () => {

    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carsService.getAll().then(({data})=> setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarsForm setTrigger ={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsContainer};

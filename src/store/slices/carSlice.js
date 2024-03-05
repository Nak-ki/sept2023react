import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: false,
    carForUpdate: null
}

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        },
        setTrigger: (state, action) => {
            state.cars = action.payload
        },
        setCarFoUpdate: (state, action) => {
            state.cars = action.payload
        }
    }
})

const {reducer:carReducer, actions} = carSlice

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
   characters: []
}

const getByIds = createAsyncThunk(
    'characterSlice/getByIds',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getById(ids)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const characterSlice = createSlice ({
    name: 'characterSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getByIds.fulfilled, (state, action) => {
                state.characters = action.payload
            })

})

const {reducer: characterReducer, actions} = characterSlice
const  characterActions = {
    ...actions,
    getByIds
}

export {
    characterActions,
    characterReducer
}
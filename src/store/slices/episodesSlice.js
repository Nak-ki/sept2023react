import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    seriesName: null,
    next: null,
    prev: null
}

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice ({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setSeriesName:  (state, action) => {
            state.seriesName = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {next, prev}, results} = action.payload;
                state.episodes = results
                state.next = next
                state.prev = prev
            })
            .addMatcher(isFulfilled(getAll), state => {
                state.seriesName = null
            })

})

const {reducer: episodeReducer, actions} = episodesSlice
const  episodeActions = {
    ...actions,
    getAll
}

export {
    episodeActions,
    episodeReducer
}
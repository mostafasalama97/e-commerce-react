import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { ILoadingState, IRecord } from "@customeTypes/sharedTypes";

// promise lifeCycle action


interface ICategoriesState {
    records: IRecord[];
    loading: ILoadingState;
    error: string | null;
}

const initialState: ICategoriesState = {
    records: [],
    loading: ILoadingState.IDLE,
    error: null,

}

const categoriesSllice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    // i have three cases [ pending - failed - succeeded]
    extraReducers(builder) {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = ILoadingState.PENDING;
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = ILoadingState.FULLFIELD;
            state.records = action.payload;
        });
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = ILoadingState.FAILED;
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload;
            };
        });
    },
})

export { actGetCategories }
export default categoriesSllice.reducer;
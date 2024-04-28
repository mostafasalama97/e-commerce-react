import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { ILoadingState, IProduct } from "@customeTypes/sharedTypes";

// promise lifeCycle action


interface ICategoriesState {
    records: IProduct[];
    loading: ILoadingState;
    error: string | null;
}

const initialState: ICategoriesState = {
    records: [],
    loading: ILoadingState.IDLE,
    error: null,

}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsCleanUp : (state) => {
            state.records = [];
        }
    },
    // i have three cases [ pending - failed - succeeded]
    extraReducers(builder) {
        builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
            state.loading = ILoadingState.PENDING;
            state.error = null;
        });
        builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
            state.loading = ILoadingState.FULLFIELD;
            state.records = action.payload;
        });
        builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
            state.loading = ILoadingState.FAILED;
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload;
            };
        });
    },
})

export const {productsCleanUp} = productsSlice.actions
export { actGetProductsByCatPrefix }
export default productsSlice.reducer;
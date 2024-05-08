import { IProduct } from "@customeTypes/sharedTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




// create asyncThunc(reducerName , function(payload , ThunkApi){})
const actGetProductsByCatPrefix = createAsyncThunk("products/actGetProductsByCatPrefix",
 async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.get<IProduct[]>(`/products?cat_prefix=${prefix}`)
        const productsData = response.data
        return productsData;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("Un Expected Error: " + error);
        }
    }
})

export default actGetProductsByCatPrefix;
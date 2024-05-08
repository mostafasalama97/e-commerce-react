import { IRecord } from "@customeTypes/sharedTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




// create asyncThunc(reducerName , function(payload , ThunkApi){})
const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.get<IRecord[]>("/category")
        console.log("response" , response)
        const CategoriesData = response.data
        return CategoriesData;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("Un Expected Error: " + error);
        }
    }
})

export default actGetCategories;
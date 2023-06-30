/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


interface Category {
    id: string;
    name: string;
    description: null | string;
    is_Active: boolean;
    created_At: string;
    updated_At: string;
    deleted_At: null | string;
}
const category: Category = {
    id: "04fc5eed-c2df-430f-836f-e6a99fa2319e",
    name: "ForestGreen",
    description: "earum",
    is_Active: true,
    deleted_At: null,
    created_At: "2023-06-26T22:12:38+0000",
    updated_At: "2023-06-26T22:12:38+0000",
}


export const initialState =
    [
        category,
        {
            ...category, id: "05fc5eed-c2df-430f-836f-e6a99fa2319f", name: "Peach", description: 'earum', is_is_Active: true, created_At: "2023-06-30T00:02:16+0000",
        },
        { ...category, id: "06fc5eed-c2df-430f-836f-e6a99fa2319g", name: "Apple", description: 'earum', is_is_Active: false, created_At: "2023-06-30T00:02:16+0000"},
        { ...category, id: "07fc5eed-c2df-430f-836f-e6a99fa2319h", name: "Banana", description: 'earum', is_Active: false, created_At: "2023-06-30T00:02:16+0000"},
    ]



const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        createCategory(state, action) { },
        updateCategory(state, action) { },
        deleteCategory(state, action) { }
    },
});

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
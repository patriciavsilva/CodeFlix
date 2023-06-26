/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";


interface Category {
    id: string;
    name: string;
    description: null | string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
}
const category: Category = {
    id: "04fc5eed-c2df-430f-836f-e6a99fa2319e",
    name: "ForestGreen",
    description: null,
    isActive: true,
    deletedAt: null,
    createdAt: "2023-06-26T22:12:38+0000",
    updatedAt: "2023-06-26T22:12:38+0000",
}

const categories = [
    category,
    { ...category, id: "05fc5eed-c2df-430f-836f-e6a99fa2319f", name: "Peach" },
    { ...category, id: "06fc5eed-c2df-430f-836f-e6a99fa2319g", name: "Apple" },
    { ...category, id: "07fc5eed-c2df-430f-836f-e6a99fa2319h", name: "Banana" },
]
export const initialState = {
    categories: [categories],
}


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: { 
        createCategory(state, action) {},
        updateCategory(state, action) {},
        deleteCategory(state, action) {}
    },
});

export default categoriesSlice.reducer;
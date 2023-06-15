import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItem(state, action) {
            
        },
        removeItem(state, id) {

        }
    }
});

export const counterActions = cartSlice.actions;

export default cartSlice.reducer;
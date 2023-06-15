import React, { createSlice } from "react";

const cartSlice = createSlice({
    name: "cart",
    initialStae: {
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
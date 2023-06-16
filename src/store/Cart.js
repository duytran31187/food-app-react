import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItem(state, action) { // all action.data must be accessed via action.payload
            console.log('addItem',action.payload)
            const updatedTotalAmount = state.totalAmount + action.payload.item.price * action.payload.item.amount;
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.item.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
    
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload.item);
            }
            
            state.items = updatedItems;
            state.totalAmount = updatedTotalAmount;
        },
        removeItem(state, action) {
            console.log(action.payload);
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.payload.id);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
          
            state.items = updatedItems;
            state.totalAmount = updatedTotalAmount;
        }
    }
});

export const counterActions = cartSlice.actions;

export default cartSlice.reducer;
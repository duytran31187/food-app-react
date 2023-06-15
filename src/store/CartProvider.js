import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    let updatedItems = state.items;
    let totalAmount = state.totalAmount;
    // eslint-disable-next-line default-case
    if (action.type === "ADD") {
        updatedItems = state.items.concat(action.item);
        totalAmount = totalAmount + action.item.price * action.item.amount;
    }
    return {
        items: updatedItems,
        amount: totalAmount
    };
};

const CartProvider = (props) => {
    //  
    /**
     * steps:
     * 1:create cartContextData variable with DUMMuy data
     * 2:pass data to CartContext.Provider value={cartContextData}
     * 3. useReducer
     * 
     */
    // const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );
    const addItemToCartHandler = (item) => {
        console.log(`addItemToCartHandler '${JSON.stringify(item)}'`);
        dispatchCartAction({type: 'ADD', item: item});
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContextData = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      };
    // NOTE: the value property must have data, unless error thrown.
      
    return (
        <CartContext.Provider value={cartContextData}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;
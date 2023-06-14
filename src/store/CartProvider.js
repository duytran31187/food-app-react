import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [
        {
            id: 'cv1',
            amount: 5
        }
    ],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    // switch (action) {
    //     case "ADD":
    //         // break;
    //     case 'REMOVE':
    //         // break;
    //     default:
    //         return {
    //             items: [
    //                 {
    //                     id: 'cv1',
    //                     amount: 2
    //                 }
    //             ],
    //             totalAmount: 0,
    //         }
    //         break;          
    // }
    return defaultCartState;
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
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction('ADD', {item: item});
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction('REMOVE', {id: id});
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
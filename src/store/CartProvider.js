import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action) {
        case "ADD":
            break;
        case 'REMOVE':
            break;
        default:
            break;          
    }
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction('ADD', {item: item});
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction('REMOVE', {id: id});
    };

    return (
        <CartContext.Provider value={CartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;
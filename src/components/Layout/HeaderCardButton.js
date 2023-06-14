import React, { useContext } from "react";
import classes from "./HeaderCardButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCardButton = props => {
    const cartCtx = useContext(CartContext);
    
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    
    return (
        <button className={classes.button}>
            <span className={classes.icon} onClick={props.onShowCart}>
                <CartIcon />
            </span>
            <span>
                Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCardButton;
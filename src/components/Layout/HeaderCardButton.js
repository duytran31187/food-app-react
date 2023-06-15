import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCardButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";
import useIsHighlight from "../../hooks/use-higlight";
import { useSelector, useDispatch } from "react-redux";

const HeaderCardButton = props => {
    const items = useSelector((state) => state.cart.items);
    // const cartCtx = useContext(CartContext);
    
    // const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    
    const isHighlight = useIsHighlight(items);
    const btnClasses =`${classes.button} ${isHighlight ? classes.bump : ''}`;

    return (
        <button className={btnClasses}>
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
import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCardButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCardButton = props => {
    const [isHighlight, setIsHighlight] = useState(false);
    const cartCtx = useContext(CartContext);
    
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses =`${classes.button} ${isHighlight ? classes.bump : ''}`;
    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setIsHighlight(true);
        const timer = setTimeout(() => {
            setIsHighlight(false);
        }, 300);
        return () => { // this is called clean up function in reactjs
            clearTimeout(timer);
        };

    }, [cartCtx.items]);
    

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
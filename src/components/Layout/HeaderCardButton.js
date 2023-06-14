import React from "react";
import classes from "./HeaderCardButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCardButton = props => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Cart
            </span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
};

export default HeaderCardButton;
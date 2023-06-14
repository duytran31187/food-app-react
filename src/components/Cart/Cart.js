import React from "react";
import classes from  './Cart.module.css';
import Modal from "../Layout/UI/Modal/Modal";

const Cart = props => {
    const cardItems = <ul className={classes['cart-items']}>{[
        {id:'c1', name:"shushi", amount:2 ,price: 12.99},
    ].map(item => {
        return (
            <li key={item.id}>{item.name}</li>
        );
    })}</ul>;
    return (
        <Modal>
            {cardItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>32.23</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes['button']}>Order</button>
            </div>
        </Modal>
    );
};
export default Cart;
import React from "react";
import classes from  './Cart.module.css';
import Modal from "../Layout/UI/Modal/Modal";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {counterActions} from "../../store/Cart";

const Cart = props => {
    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount.toFixed(2));
    const hasItems = items.length > 0;
    const carItemAddHandler = (item) => {
        const addedItem = {
            ...item,
            amount:1
        };
        dispatch(counterActions.addItem({
            item:addedItem
        }));
    };
    const carItemRemoveHandler = (id) => {
        // cartCtx.removeItem(id);
        dispatch(counterActions.removeItem({
            id:id
        }));
    };
    
    const cardItems = <ul className={classes['cart-items']}>{items.map(item => {
        return (
            <CartItem key={item.id} name={item.name} price={item.price} amount ={item.amount}
            onAdd = {carItemAddHandler.bind(null, item)} 
            onRemove={carItemRemoveHandler.bind(null, item.id)}
            />
        );
    })}</ul>;
    return (
        <Modal onClose={props.onClose}>
            {cardItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes['button']}>Order</button>}
            </div>
        </Modal>
    );
};
export default Cart;
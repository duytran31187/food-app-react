import React, {useContext} from "react";
import classes from  './Cart.module.css';
import Modal from "../Layout/UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    
    const cartCtx = useContext(CartContext);
    // const {items, totalAmount} = cartCtx;
    const items = cartCtx.items
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = items.length > 0
    
    const cardItems = <ul className={classes['cart-items']}>{items.map(item => {
        return (
            <CartItem key={item.id} name={item.name} price={item.price} amount ={item.amount} />
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
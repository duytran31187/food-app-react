import React, {useContext, useState} from "react";
import classes from  './Cart.module.css';
import Modal from "../Layout/UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);
    const items = cartCtx.items
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = items.length > 0;
    const carItemAddHandler = (item) => {
        const addedItem = {
            ...item,
            amount:1
        };
        cartCtx.addItem(addedItem);
    };
    const carItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const orderHandler = () => { // show checkout form
        setIsCheckout(true);
    };

    const submitOrderHandler = () => { //submit order
    }
    
    const cartItems = <ul className={classes['cart-items']}>{items.map(item => {
        return (
            <CartItem key={item.id} name={item.name} price={item.price} amount ={item.amount}
            onAdd = {carItemAddHandler.bind(null, item)} 
            onRemove={carItemRemoveHandler.bind(null, item.id)}
            />
        );
    })}</ul>;
    
    // contents
    const modalActions = ( // default actions
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      );

    const cartModalContent = ( // default content
        <React.Fragment>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {isCheckout && (
            <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
          )}
          {!isCheckout && modalActions}
        </React.Fragment>
    );
    
    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = ( // after confirm clicked
      <React.Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
      </React.Fragment>
    );
      
    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};
export default Cart;
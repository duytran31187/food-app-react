import React, { useRef, useState } from "react";
import Input from "../../Layout/UI/Input";
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const amountRef = useRef();
    const [isValid, setIsValid] = useState(true);
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value; //GET input value by ref
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmountNumber === 0) {
            setIsValid(false);
        } else {
            setIsValid(true);
            props.addItemToCard(enteredAmountNumber);
        }
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount"
            ref = {amountRef}
            input={{
                id:"amount_" + props.id,
                type:"number",
                name:"amount",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            {!isValid && (<i>Invalid amount</i>)}
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;
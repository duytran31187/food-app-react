import React from "react";
import Input from "../../Layout/UI/Input";
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    return (
        <form className={classes.form}>
            <Input label="Amout" 
            input={{
                id:"amount_" + props.id,
                type:"number",
                name:"amount",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;
import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../MealForm/MealItemForm";

const MealItem = props => {
    const formattedPRice = `$${props.price.toFixed(2)}`; // first $ is dollar
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{formattedPRice}</div>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    );
};
export default MealItem;
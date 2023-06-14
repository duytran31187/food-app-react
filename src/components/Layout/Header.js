import classes from './Header.module.css';
import React, { Fragment } from 'react';
import mealImage from "../../assets/meals.jpg";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.Header}>
                <h1>React Meal</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt='A table with full of foods' />
            </div>
        </Fragment>
    );
};
export default Header;
import classes from './Header.module.css';
import React, { Fragment } from 'react';
import mealImage from "../../assets/meals.jpg";
import HeaderCardButton from './HeaderCardButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meal</h1>
                <HeaderCardButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt='A table with full of foods' />
            </div>
        </Fragment>
    );
};
export default Header;
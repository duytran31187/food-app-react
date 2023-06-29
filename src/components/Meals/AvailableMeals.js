import React, {useEffect, useState} from "react";
import classes from './AvailableMeals.module.css';
import Card from "../Layout/UI/Card";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//   ];

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError,  setHttpError] = useState('');
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://food-app-react-97e2c-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      
      if (!response.ok) {
        throw new Error("something wrong with service");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      const timer = setTimeout(() => {setIsLoading(false);}, 1000); // setTimeout, just want to see loading effect
      
      return () => { // clean up
        clearTimeout(timer);
      }
    };

    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  if (isLoading) {
    return (<p>IS LOADING.....</p>);
  }
  if (httpError) {
    return (
      <section>
        {httpError}
      </section>
    )
  }
  const mealsList = meals.map((meal) => <MealItem
      key={meal.id}
      id = {meal.id}
      meal={meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />);
  return (
      <section className={classes.meals}>
        <Card>
          <ul>
            {mealsList}
          </ul>
        </Card>
          
      </section>
  )
}
export default AvailableMeals;
import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React from "react";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const showCartHandler = () => {
    console.log("showCart");
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    console.log("hideCartHandler");
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

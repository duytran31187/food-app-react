import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React from "react";
import CartProvider from "./store/CartProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/products', element: <ProductsPage />}
]);

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
    <RouterProvider router={router} />
  );
}

export default App;

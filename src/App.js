import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React from "react";
import CartProvider from "./store/CartProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ProductsPage from "./pages/Products";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: '/products', element: <ProductsPage />},
      {path: '/products/:productId', element: <ProductDetailPage />}
    ]
  },
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
    <RouterProvider router={router} /> // RouterProvider works if it put at App only
  );
}

export default App;

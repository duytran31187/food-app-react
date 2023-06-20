import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ProductsPage from "./pages/Products";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
import EventsPage from "./pages/Events/Events";
import EventDetailPage from "./pages/Events/EventDetail";
import FoodPage from "./pages/Food";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: '/products', element: <ProductsPage />},
      {path: '/products/:productId', element: <ProductDetailPage />},
    ]
  },
  {path:'/foods', element: <FoodPage />},
  {
    path: '/events',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {index: true, element: <EventsPage />},
      {path:':eventId', element: <EventDetailPage />},
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

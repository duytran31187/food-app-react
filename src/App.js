import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ProductsPage from "./pages/Products";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/Events/EventDetail';
import FoodPage from "./pages/Food";
import AuthenticationPage, { action as authAction } from "./pages/Authentication";
import EventsRootLayout from "./pages/Events/EventRoot";
import EditEventPage from './pages/Events/EditEvent';
import { action as manipulateEventAction } from './components/Events/EventForm';
import NewEventPage from "./pages/Events/NewEvent";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: '/products', element: <ProductsPage />},
      {path: '/products/:productId', element: <ProductDetailPage />},
      {path:'/foods', element: <FoodPage />},
      {
          path: 'auth',
          element: <AuthenticationPage />,
          action: authAction
      },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

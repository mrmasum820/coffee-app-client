import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Main from './Layout/Main.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffee-app-server-production.up.railway.app/coffee')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/viewCoffee/:id',
        element: <ViewCoffee></ViewCoffee>,
        loader: ({ params }) => fetch(`https://coffee-app-server-production.up.railway.app/coffee/${params.id}`)
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-app-server-production.up.railway.app/coffee/${params.id}`)
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

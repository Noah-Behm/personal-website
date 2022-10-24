import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from './Components/error-page';
import About from './Components/about.jsx'
import Projects from './Components/projects.js'
import Home from './Components/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  
  [
  {
    path: "/",
    element: <div><App /></div>,
    errorElement: <div><ErrorPage /></div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]

);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

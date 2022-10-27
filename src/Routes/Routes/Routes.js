import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Course/Course";

import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Others/Profile/Profile";
import Checkout from "../../Pages/Checkout/Checkout";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/courses",
        element: <Course></Course>,
        loader: () => fetch("http://localhost:5000/courses"),
      },

      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/FAQ",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

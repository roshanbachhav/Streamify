import React from "react";
import SignIn from "./SignIn";
import Error from "./Error";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Movies from "./Movies";
import ProtectRoutes from "./ProtectRoutes";
import { useSelector } from "react-redux";
import MovieDetail from "./MovieDetail";
import Navbar from "./Navbar";
import Search from "./Search";

const Body = () => {
  const user = useSelector((store) => store?.user);
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/browse" /> : <SignIn />,
      errorElement: <Error />,
    },
    {
      path: "/Browse",
      element: (
        <ProtectRoutes>
          <Browse />,
        </ProtectRoutes>
      ),
    },
    {
      path: "/movies",
      element: (
        <ProtectRoutes>
          <Movies />,
        </ProtectRoutes>
      ),
    },
    {
      path: "/searchbar",
      element: (
        <ProtectRoutes>
          <Search />,
        </ProtectRoutes>
      ),
    },
    {
      path: "/movies/movie-info/:id",
      element: (
        <ProtectRoutes>
          <Navbar />
          <MovieDetail />,
        </ProtectRoutes>
      ),
    },
  ]);


  return <RouterProvider router={appRoutes} />;
};

export default Body;

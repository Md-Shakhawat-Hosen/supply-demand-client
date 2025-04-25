import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DataCollection from "./pages/DataCollection";
import MarketRecommendations from "./pages/MarketRecommendations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "data-collection",
        element: <DataCollection />,
      },
      {
        path: "market-recommendations",
        element: <MarketRecommendations/>
      },
    ],
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "profile",
    element: <Profile />,
  },
]);

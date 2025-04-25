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
import BlockchainLedger from "./pages/BlockchainLedger";
import PublicLedger from "./pages/PublicLedger";

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
        element: (
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        ),
      },
      {
        path: "data-collection",
        element: (
          <PrivateRoute>
            <DataCollection />
          </PrivateRoute>
        ),
      },
      {
        path: "market-recommendations",
        element: (
          <PrivateRoute>
            <MarketRecommendations />
          </PrivateRoute>
        ),
      },
      {
        path: "blockchain-ledger",
        element: (
          <PrivateRoute>
            <BlockchainLedger />
          </PrivateRoute>
        ),
      },
      {
        path: "public-ledger",
        element: <PublicLedger/>
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

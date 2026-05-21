import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layout/RootLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/log/Login.jsx";
import Register from "./pages/res/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import AddReview from "./pages/AddReview/AddReview.jsx";
import AllReviews from "./pages/AllReviews/AllReviews.jsx";
import Error from "./pages/error/Error.jsx";
import PrivateRoute from "./Private/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-reviews",
        loader: () => fetch("http://localhost:3000/products"),
        Component: AllReviews,
      },
      {
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

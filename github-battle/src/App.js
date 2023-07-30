import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Popular from "./components/popular/Popular";
import Battle from "./components/Battle";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "battle",
        element: <Battle />,
      },
      {
        path: "*",
        element: <h3>Error!</h3>,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;

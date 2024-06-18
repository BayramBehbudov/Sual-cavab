import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContextProvider } from "../context/Context.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "../router/router.jsx";
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);

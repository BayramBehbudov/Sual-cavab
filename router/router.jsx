import Login from "../login/Login";
import Home from "../src/Home";

export default [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];

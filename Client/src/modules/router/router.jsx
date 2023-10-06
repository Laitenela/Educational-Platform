import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
import profileRoute from "./profilesRoute";
import Main from "../../components/pages/main/main";
import routeLoader from "../loaders/loaders";
import coursesRoute from "./coursesRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: routeLoader.app,
    children: [
      {
        path: "",
        element: <Main />,
        loader: routeLoader.main,
      },
      {
        path: "/users",
        children: profileRoute,
      },
      {
        path: "/courses",
        children: coursesRoute,
      },
    ],
  },
]);

export default router;

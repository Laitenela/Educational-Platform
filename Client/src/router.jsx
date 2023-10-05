import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Main from "./components/routes/main/main";
import Profile from "./components/routes/profile/profile";
import ProfileEditor from "./components/routes/profileEditor/profileEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/my",
        element: <Profile />,
      },
      {
        path: "/my/edit",
        element: <ProfileEditor />,
      },
    ],
  },
]);

export default router;
